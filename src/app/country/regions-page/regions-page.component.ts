import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { ToastrService } from 'ngx-toastr';
import { Country } from '../interfaces/country.interface';
import { Region } from '../interfaces/region.type';



@Component({
  selector: 'app-regions-page',
  templateUrl: './regions-page.component.html',
  styleUrl: './regions-page.component.css'
})
export class RegionsPageComponent implements OnInit{
  


  public dataResponse: Country[] = [];
  constructor( 
    private countryService: CountriesService,
    private toastr: ToastrService
    ){}
  ngOnInit(): void {
    
    this.dataResponse = this.countryService.cacheStore.byRegion.countries;

  }
  
  public alert = true;
  public lenguajes: string[] = []
  private selectedRegion?: Region;
  public regions: Region[] = ["Asia", "Oceania", "Europe", "America", "Africa"];
  public loading = false;

  
    searchRegion( region: Region){
      this.loading = true;
      this.dataResponse = []
      this.selectedRegion = region


    if( !region){
      return this.toastr.warning("Ingresa informacion para buscar")
    }
   
    this.countryService.searchRegion( region )
      .subscribe( data =>{
        this.dataResponse = data;
        this.loading = false;
        return this.toastr.success("Informacion encontrada - Regiones" )
      })

    return;
  }
}
