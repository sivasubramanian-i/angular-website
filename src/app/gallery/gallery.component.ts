import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../config.service";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"]
})
export class GalleryComponent implements OnInit {
  galleryRow1Object: Array<object> = [];
  galleryRow2Object: Array<object> = [];

  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.galleryRow1Object = this.getCakes();
    this.galleryRow2Object = this.getSweets();
  }

  getCakes() {
    return this.config.getConfig().cakes;
  }
  getSweets() {
    return this.config.getConfig().sweets;
  }
}
