import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }

  public getAllProduct(){
    return this.http.get("http://localhost:8081/allProduct")
  }
  public getProductById(idProduct:any){
    return this.http.get("http://localhost:8081/getProductById" + idProduct)
  }
}
