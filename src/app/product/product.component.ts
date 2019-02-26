import { Component, OnInit } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  constructor(private http: Http) {}
  confirmationString: string = "new product has been added";
  isAdded: boolean = false;

  productObj: object = {};
  addNewProduct = function(product) {
    this.productObj = {
      name: product.name,
      color: product.color
    };
    this.http
      .post("http://localhost:1337/clients", this.productObj)
      .subscribe((res: Response) => {
        this.isAdded = true;
      });
  };

  ngOnInit() {}
}
