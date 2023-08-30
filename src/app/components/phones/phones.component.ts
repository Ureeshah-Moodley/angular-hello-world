import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PhonesResponse, Product } from 'src/app/models/phonesResponse';
import { PhonesService } from 'src/app/services/phones.service';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements AfterViewInit { // Differenece with OnInit?
  phoneData$: Observable<PhonesResponse>;
  dataSource: MatTableDataSource<Product>;
  displayedColumns: string[] = ['Title', 'Description', 'price', 'Discount Percentage', 'rating', 'Brand', 'Thumbnail'];
  constructor(private phoneService: PhonesService, public fg: FormBuilder) { }

  declare filterForm: FormGroup;
  ngOnInit(): void {
    this.filterForm = this.fg.group({
      filter : [""]
    })
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) set matSort(sort: MatSort) {
    if (!sort) { return; }
    if (!this.dataSource.sort) {
        this.dataSource.sort = sort;
    }
    
}

  ngAfterViewInit() {
    this.phoneData$ = this.phoneService.getData().pipe(
      tap( n => {
        this.dataSource = new MatTableDataSource<Product>(n.products)
        this.dataSource.filterPredicate = function(data, filter: string): boolean {
          return data.title.toLowerCase().includes(filter) ;
        };
        this.dataSource.paginator = this.paginator;        
      })
    ); 
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase(); 
    // filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }

}
