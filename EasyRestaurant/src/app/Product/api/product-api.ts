import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductModel } from "../models/Product.model";



@Injectable()
export class ProductApi {
    
    public apiUrl = `https://localhost:5101/Products/GetAll`;

    constructor(private http:HttpClient){}
    
    public getProducts():Array<ProductModel>{
        let productList : Array<ProductModel> = [];

        this.http.get(this.apiUrl)
        .subscribe((items:any) => {

            let productModel = new ProductModel();
            items.map( (item:any)=>{
                productModel.id = item.id;
                productModel.name = item.name;
                productModel.unitValue = item.unitValue;
                productModel.cost = item.cost;
                productList.push(productModel);
                productModel = new ProductModel();
            });
        });
        return productList;
}


}