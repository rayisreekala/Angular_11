import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AppMainComponent } from "./app.main.component";
import { AuthGuard } from "./service/auth.guard";
import { LoginComponent } from "./components/admin/login/login.component";
import { HomeComponent } from "./components/admin/home/home.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CasesComponent } from "./cases/cases.component";

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                // RouterModule.forRoot(routes, { useHash: true })
                {
                    path: "",
                    component: LoginComponent,
                    pathMatch: "full",
                },
                { path: "login", component: LoginComponent },

                { path: "profile", component: ProfileComponent },
                {
                    path: "dashboard",
                    component: AppMainComponent,
                    children: [
                        { path: "", component: DashboardComponent },
                        { path: "lawyers", component: HomeComponent },
                        { path: "cases", component: CasesComponent },
                    ],
                },
                {
                    path: "**",
                    component: AppMainComponent,
                    pathMatch: "full",
                },
            ],
            { scrollPositionRestoration: "enabled" }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
