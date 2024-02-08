import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { ToastrService } from 'ngx-toastr';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-independents-page',
  templateUrl: './independents-page.component.html',
  styleUrl: './independents-page.component.css'
})
export class IndependentsPageComponent implements OnInit{
  public dataResponse: Country[] = [];
  constructor( 
    private countryService: CountriesService
    ){}
  
    ngOnInit(): void {
      this.searchIndependents()
    }

  
    searchIndependents(){
      this.dataResponse = []
  
   
    this.countryService.searchIndependientes(  )
    .subscribe( data =>{

        this.dataResponse = data;
  
   });

    return;
  }

  public loaded = false;

  loading(){
    setTimeout(()=>{
      this.loaded = true;
    },1000)
  }
}
