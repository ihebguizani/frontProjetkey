import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from "../product-service.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  products:any;

  constructor(private productS:ProductServiceService) {
  }

  ngOnInit() {
    let resp = this.productS.getAllProduct()
    resp.subscribe((data: any) => this.products = data);

  }


}
