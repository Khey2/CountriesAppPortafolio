import { Component } from '@angular/core';
import { SideNavOptions } from '../interfaces/sidenav-options.interface';

@Component({
  selector: 'shared-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  public sidenavOptions: SideNavOptions[] = [
    { path: "countries", title: "Paises"},
    { path: "regions", title: "Regiones"},
    { path: "independents", title: "Independientes"},
    { path: "language", title: "Lenguaje"},


  ]
}
