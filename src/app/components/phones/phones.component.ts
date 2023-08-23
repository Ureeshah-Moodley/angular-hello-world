import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PhonesResponse } from 'src/app/models/phonesResponse';
import { PhonesService } from 'src/app/services/phones.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { tap } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {
  declare phoneData$: Observable<PhonesResponse>;
  phoneData: PhonesResponse[] = [];
  dataSource: MatTableDataSource<PhonesResponse>;
  displayedColumns: string[] = ['Title', 'Description', 'Price (R)', 'Discount Percentage', 'Rating', 'Brand', 'Thumbnail'];
  constructor(private phoneService: PhonesService) { }

  ngOnInit(): void {
    this.phoneData$ = this.phoneService.getData().pipe(tap((data) => (this.phoneData.push(data))));
    this.dataSource = new MatTableDataSource<PhonesResponse>(this.phoneData);
    console.log(this.dataSource.filteredData)
  }
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
