import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public products: any;
  public displayedColumns: string[] = ['Title', 'Description', 'Price', 'DiscountPercentage','Rating','Brand','Thumbnail'];

  constructor(private _productService: ApiService) { }

  ngOnInit(): void {
    this._productService.getProductData()
    .subscribe(data => this.products = data.products);
  }

  printData(){
    console.log(this.products)
  }

}
