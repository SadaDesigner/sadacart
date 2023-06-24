import { Injectable } from '@angular/core';
//import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) { }
  //baseurl : string = environment.test

  baseurl : string = 'https://fakestoreapi.com/';



  getproducts() {
    return this.http.get(this.baseurl + 'products');
  }

  getcategories() {
    return this.http.get(this.baseurl + 'products/categories')
  }

}
