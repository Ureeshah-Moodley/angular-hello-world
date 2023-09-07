import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Iresult } from 'src/Interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _url: string = "https://dummyjson.com/products";
  constructor(private http: HttpClient) { }

  getProductData(): Observable<Iresult>{ 
    
    return this.http.get<Iresult>(this._url);

  }
}
