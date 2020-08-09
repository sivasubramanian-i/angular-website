import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../config.service";
@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"]
})
export class CategoryComponent implements OnInit {
  categoryObject: Array<object> = [];

  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.categoryObject = this.getCategories();
  }

  getCategories() {
    return this.config.getConfig().categories;
  }
}
