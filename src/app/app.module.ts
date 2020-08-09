import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgImageSliderModule } from "ng-image-slider";
import { CategoryComponent } from "./category/category.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ServiceComponent } from "./service/service.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { ConfigService } from "./config.service";

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    GalleryComponent,
    ServiceComponent,
    AboutUsComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgImageSliderModule],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {}
