import { Component, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PhonesResponse, Product } from 'src/app/models/phonesResponse';
import { PhonesService } from 'src/app/services/phones.service';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {
  phoneData$: Observable<PhonesResponse>;
  dataSource: MatTableDataSource<Product>;
  displayedColumns: string[] = ['Title', 'Description', 'Price (R)', 'Discount Percentage', 'Rating', 'Brand', 'Thumbnail'];
  constructor(private phoneService: PhonesService) { }

  ngOnInit(): void {
    
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
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
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
