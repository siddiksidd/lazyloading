import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


// interface Product
//  {
//   productId:number,
//    productName:String,
//    productPrice:number,
//    productDes:String,
//    productImg:String,
//  }
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 
    url:string = 'assets/products.json'; //local
  //url:string = ''; //network RESTful
  constructor(private httpClient:HttpClient) { }
  getallproducts(){
     return this.httpClient.get(this.url)
  }
}
