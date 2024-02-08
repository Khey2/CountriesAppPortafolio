import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  declarations: [
    SidenavComponent,
    SearchBoxComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports: [ 
    SidenavComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
