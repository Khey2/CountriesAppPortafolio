import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { ToastrService } from 'ngx-toastr';
import { Country } from '../../interfaces/country.interface';
import { lenguaje } from '../../interfaces/lenguaje.type';



@Component({
  selector: 'app-language-page',
  templateUrl: './language-page.component.html',
  styleUrl: './language-page.component.css'
})
export class LanguagePageComponent implements OnInit {

  ngOnInit(): void {
    this.dataResponse = this.countryService.cacheStore.byLenguaje.countries;
  }


  public dataResponse: Country[] = [];
  constructor( 
    private countryService: CountriesService,
    private toastr: ToastrService
    ){}
  
    public lenguajes: lenguaje[] = ["English", "Spanish"]

    public loading = false;
  
    searchLenguages( lenguaje: lenguaje){
      this.loading = true
    this.dataResponse = []
    if( !lenguaje){
      return this.toastr.warning("Ingresa informacion para buscar")
    }
   
    this.countryService.searchLenguages( lenguaje )
    .subscribe( data =>{
      if( data.length == 0){
         this.loading = false
        return this.toastr.warning("No fue posible encontrar el lenguaje " + lenguaje)
      }
       this.loading = false
      this.dataResponse = data.slice(0, 20);
      return;
        
  
   });

    return;
  }
}
