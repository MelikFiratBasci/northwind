import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44369/api/products/getall';
  constructor(private httpClient: HttpClient) {}

  getProducts():Observable<ListResponseModel<Product>> {//subscribe olunabilir bir responsemodel doneceksin 
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl); //gelen data productResponseModele Map edilecek.
  }
}
