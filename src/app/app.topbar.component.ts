// import { Component } from '@angular/core';
// import { AppComponent} from './app.component';
// import { AppMainComponent} from './app.main.component';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-topbar',
//   templateUrl: './app.topbar.component.html',
//   styleUrls: ['./app.topbar.component.scss']
// })
// export class AppTopBarComponent {

//     constructor(public app: AppComponent, public appMain: AppMainComponent, private router:Router) {}
//     logout(){
//       sessionStorage.clear();
//       this.router.navigate(['/login'])
//     }
// }
import { Component, ViewChild } from "@angular/core";
import { OverlayPanel } from "primeng/overlaypanel";
import { AppComponent } from "./app.component";
import { AppMainComponent } from "./app.main.component";
import { Router } from "@angular/router";

@Component({
    selector: "app-topbar",
    templateUrl: "./app.topbar.component.html",
    styleUrls: ["./app.topbar.component.scss"],
})
export class AppTopBarComponent {
    @ViewChild("op", { static: false }) op: OverlayPanel;
    
    constructor(public app: AppComponent, public appMain: AppMainComponent, private router:Router) {}

    viewProfile() {
        // Logic to view profile
        console.log("View Profile clicked");
    }

    viewSettings() {
        // Logic to view settings
        console.log("Settings clicked");
    }

    logout() {
        sessionStorage.clear();
        this.router.navigate(["/login"]);
    }
}
