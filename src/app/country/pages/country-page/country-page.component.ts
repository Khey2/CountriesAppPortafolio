import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent implements OnInit {


  
  constructor( 
    private countryService: CountriesService,
    private toastr: ToastrService
    ){}
  ngOnInit(): void {
    this.dataResponse = this.countryService.cacheStore.byCountrie.countries;
  }
  

    loaded = true;
    public dataResponse: Country[] = [];
    
    searchTerm( term: string){

      this.dataResponse = []

      if( !term){

        return this.toastr.warning("Ingresa informacion para buscar")
      }
      this.loaded = false;

  
   
    this.countryService.searchTerm( term )
    .subscribe( data =>{
        if( data.length === 0){

          this.dataResponse = []
          this.loaded = true;
          return this.toastr.warning("Informacion No encontrada - Paises")
        }
        this.loaded = true;

        this.dataResponse = data.slice(0,20);
        return this.toastr.success("Informacion encontrada - Paises")
  
   });

    return;
  }


}
