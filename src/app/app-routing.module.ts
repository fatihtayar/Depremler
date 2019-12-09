import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapTableComponent } from './bootstrap-table/bootstrap-table.component';
import { DevexpressDatagridComponent } from './devexpress-datagrid/devexpress-datagrid.component';


const routes: Routes = [
  {path:'',redirectTo:'devexpress-datagrid',pathMatch:'full'},
  {path:'bootstrap-table',component:BootstrapTableComponent},
  {path:'devexpress-datagrid',component:DevexpressDatagridComponent}
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
