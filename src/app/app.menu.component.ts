import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    template: `
       <ul class="layout-menu menuhover">
            <li  app-menuitem *ngFor="let item of model; let i = index;"
                [item]="item" [index]="i" [visible]="true" [root]="true"></li>
        </ul>
    `
})
export class AppMenuComponent implements OnInit {
    model: any[];
    ngOnInit() {
        this.model = [
            {
                items: [
                    { label: 'Home', icon: 'pi pi-list', routerLink: ['/dashboard'] },
                    { label: 'Preferences', icon: 'pi pi-star', routerLink: ['/home'] },
                    { label: 'Lawyers', icon: 'pi pi-user', routerLink: ['/dashboard/lawyers'] },
                    { label: 'Documents', icon: 'pi pi-folder', routerLink: ['/home'] },
                    { label: 'Searches', icon: 'pi pi-search', routerLink: ['/home'] },
                    { label: 'Cases', icon: 'pi pi-ban', routerLink: ['/home'] },
                    { label: 'Calender', icon: 'pi pi-calendar', routerLink: ['/home'] },
                    { label: 'Payables', icon: 'pi pi-dollar', routerLink: ['/home'] },
                    { label: 'Receivables', icon: 'pi pi-check', routerLink: ['/home'] },
                    { label: 'Upload Case', icon: 'pi pi-plus', routerLink: ['/dashboard/cases'] },


                ]
            },

        ]


    }
}
