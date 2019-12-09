import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxButtonModule, DxDataGridModule } from 'devextreme-angular';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BootstrapTableComponent } from './bootstrap-table/bootstrap-table.component';
import { DevexpressDatagridComponent } from './devexpress-datagrid/devexpress-datagrid.component';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      SidebarComponent,
      BootstrapTableComponent,
      DevexpressDatagridComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      DxButtonModule,
      DxDataGridModule,
      AngularFontAwesomeModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
