import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44369/api/';
  constructor(private httpClient: HttpClient) {}

  getProducts():Observable<ListResponseModel<Product>> {//subscribe olunabilir bir responsemodel doneceksin 
    let newPath = this.apiUrl + "products/getall";
    return this.httpClient.get<ListResponseModel<Product>>(newPath); //gelen data productResponseModele Map edilecek.
  }
  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getbycategory?categoryId="+categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  
}
