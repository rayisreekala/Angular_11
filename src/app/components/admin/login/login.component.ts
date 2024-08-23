import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { environment } from "src/app/environments/environment";
import { ApisService } from "src/app/service/apis.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
    providers: [MessageService],
})
export class LoginComponent implements OnInit {
    display: boolean;
    displayForgotDialog: boolean;
    loginForm: FormGroup;
    loginRes: any;
    datatoken: any;
    tokenId: string;
    button: boolean;

    constructor(
        private router: Router,
        private apiService: ApisService,
        public fb: FormBuilder,
        private messageService: MessageService
    ) {}

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            number: ["", Validators.required],
            pswd: ["", Validators.required],
        });
    }
    registration() {
        this.display = true;
    }
    navigateToCustomerRegisterForm() {
        this.router.navigate(["/"]);
    }
    navigateToconsultantRegisterForm() {
        this.router.navigate(["/"]);
    }
    navigateToVendorPage() {
        this.router.navigate(["/"]);
    }
    // forgotPassword() {
    //   this.displayForgotDialog = true;
    //   this.forgotpwdForm.get('emailId').reset();
    // }
    showDialog() {
        this.display = true;
    }
    login() {
        this.router.navigateByUrl("/dashboard");
    }
}
