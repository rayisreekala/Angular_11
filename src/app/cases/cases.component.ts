import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: "app-cases",
    templateUrl: "./cases.component.html",
    styleUrls: ["./cases.component.scss"],
})
export class CasesComponent implements OnInit {
    myform: FormGroup;

    constructor() {
        this.myform = new FormGroup({
            Client: new FormControl(""),
            CaseType: new FormControl(""),
            description: new FormControl(""),
            file: new FormControl(),
            Priority: new FormControl(""),
            LawyerType: new FormControl(""),
        });
    }
    ngOnInit(): void {}
    fetch() {
        const data = {
            clinet: this.myform.get("Client")?.value,
            Category: this.myform.get("Category")?.value,
            description: this.myform.get("description")?.value,
        };

        console.log(data);
    }
}
