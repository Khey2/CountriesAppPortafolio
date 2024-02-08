import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryPageComponent } from './country/pages/country-page/country-page.component';
import { RegionsPageComponent } from './country/regions-page/regions-page.component';
import { IndependentsPageComponent } from './country/pages/independents-page/independents-page.component';
import { LanguagePageComponent } from './country/pages/language-page/language-page.component';
import { InfoPageComponent } from './country/pages/info-page/info-page.component';

const routes: Routes = [
  {
    path: "countries",
    component: CountryPageComponent
  },
  {
    path: "regions",
    component: RegionsPageComponent
  },
  {
    path: "independents",
    component: IndependentsPageComponent
  },
  {
    path: "language",
    component: LanguagePageComponent
  },
  {
    path: "countries/:id",
    component: InfoPageComponent
  },
  {
    path: "**",
    redirectTo: "countries"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
