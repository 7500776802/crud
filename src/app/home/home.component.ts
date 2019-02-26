import { Component, OnInit } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { ReturnStatement } from "@angular/compiler";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  products = [];
  id: number;
  constructor(private http: Http) {
    this.products = [];
  }
  ngOnInit() {
    this.fetchData();
  }

  // private headers = new Headers({ "Content-Type": "application/json" });

  deleteProduct = function(id) {
    if (confirm("Are u sure?")) {
      const url = `${"http://localhost:1337/clients"}/${id}`;
      return this.http
        .delete(url, { headers: this.headers })
        .toPromise()
        .then(() => {
          this.fetchData();
        });
    }
  };

  fetchData() {
    this.http
      .get("http://localhost:1337/clients")
      .subscribe((res: Response) => {
        this.products = res.json();
        console.log(this.products);
        // this.products;
      });
  }
}
