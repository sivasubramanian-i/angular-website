import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../config.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  bannerImageObject: Array<object> = [];

  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.bannerImageObject = this.getBanners();
  }

  getBanners() {
    return this.config.getConfig().banners;
  }
}
