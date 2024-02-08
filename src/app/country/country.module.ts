import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { RegionsPageComponent } from './regions-page/regions-page.component';
import { IndependentsPageComponent } from './pages/independents-page/independents-page.component';
import { LanguagePageComponent } from './pages/language-page/language-page.component';
import { SharedModule } from '../shared/shared.module';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { RouterModule } from '@angular/router';
import { InfoPageComponent } from './pages/info-page/info-page.component';




@NgModule({
  declarations: [
    CountryPageComponent,
    RegionsPageComponent,
    IndependentsPageComponent,
    LanguagePageComponent,
    CountryTableComponent,
    InfoPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
    

  ],
   exports:[
    CountryPageComponent,
    RegionsPageComponent,
    IndependentsPageComponent,
    
    LanguagePageComponent
  ]
})
export class CountryModule { }
