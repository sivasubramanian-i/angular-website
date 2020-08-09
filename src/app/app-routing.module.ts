import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { GalleryComponent } from "./gallery/gallery.component";
import { ServiceComponent } from "./service/service.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { HeaderComponent } from "./header/header.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HeaderComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "sweets", component: GalleryComponent },
  { path: "snacks", component: GalleryComponent },
  { path: "desserts", component: GalleryComponent },
  { path: "contact", component: ServiceComponent },
  { path: "about", component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
