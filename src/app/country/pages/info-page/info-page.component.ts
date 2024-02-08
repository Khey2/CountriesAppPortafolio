import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import {  ActivatedRoute, Router } from '@angular/router';
import { catchError, of, switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrl: './info-page.component.css'
})
export class InfoPageComponent implements OnInit {
  constructor( 
    private countriesService: CountriesService, // nuestros ervicio
    private router: Router, // redirecciones
    private activatedRoute: ActivatedRoute // tomar params
    
    ){}

    public country? : Country;

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap( ({id }) => this.countriesService.searchCode( id ) ),
      
    ).subscribe( country =>{
      if( !country ) return this.router.navigateByUrl("");

      return setTimeout( ()=>{
        this.country = country;
      }, 1200)
    })
  }



}
