import { Component, OnInit } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {

    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Data',
                icon: 'fa fa-fw fa-file-o',
                items: [{
                        label: 'Products', 
                        icon: 'fa fa-fw fa-plus',
                        items: [
                            {label: 'Project'},
                            {label: 'Other'},
                        ]
                    },
                    {label: 'Services'},
                    {label: 'Categories'},
                    {separator: true},
                    {label: 'Quit'}
                ]
            },
            {
                label: 'WorkDay',
                icon: 'fa fa-fw fa-edit',
                items: [
                    {label: 'New Day', icon: 'fa fa-fw fa-mail-forward'},
                    {label: 'Hours missing', icon: 'fa fa-fw fa-mail-reply'}
                ]
            },
            {
                label: 'Reports',
                icon: 'fa fa-fw fa-question',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search', 
                        icon: 'fa fa-fw fa-search', 
                        items: [
                            {
                                label: 'Text', 
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                    ]}
                ]
            },
            {
                label: 'Actions',
                icon: 'fa fa-fw fa-gear',
                items: [
                    {
                        label: 'Edit',
                        icon: 'fa fa-fw fa-refresh',
                        items: [
                            {label: 'Save', icon: 'fa fa-fw fa-save'},
                            {label: 'Update', icon: 'fa fa-fw fa-save'},
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'fa fa-fw fa-phone',
                        items: [
                            {label: 'Delete', icon: 'fa fa-fw fa-minus'}
                        ]
                    }
                ]
            },
            {
                label: 'Account', icon: 'fa fa-fw fa-minus'
            }
        ];
    }
}
