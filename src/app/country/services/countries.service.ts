import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, catchError, delay, map, of, take, tap, throwError } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore, byLenguaje } from '../interfaces/cache-setore.interface';
import { Region } from '../interfaces/region.type';
import { lenguaje } from '../interfaces/lenguaje.type';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor( 
    private http: HttpClient,
    private toastr: ToastrService
    
    ) { }



    private getCountriesRequest(url: string): Observable<Country[]>{
      return this.http.get<Country[]>( url )
      .pipe(
        catchError( error => {
           return  of([])
         
        }),
        delay(1000) 
      )
    }

    //guardando en el servicio singleton la inf
  public cacheStore: CacheStore = {
    byCountrie: { term: "", countries: []},
    byRegion: { region: "", countries: []},
    byLenguaje: { lenguaje: "", countries: []},
  }


  private baseUrl = "https://restcountries.com/v3.1/"

  searchTerm( term: string){
    const url = `https://restcountries.com/v3.1/name/${term}`
   return this.getCountriesRequest(url)
   .pipe(
    tap( countries => this.cacheStore.byCountrie = { term: term, countries: countries})
   )
  }

  searchRegion( term: Region){
    const url = `https://restcountries.com/v3.1/region/${term}`
    return this.getCountriesRequest(url)
    .pipe(
      tap( countries => this.cacheStore.byRegion = { region: term, countries: countries})
     )
  }

  searchIndependientes( ){
    const url = `https://restcountries.com/v3.1/independent?status=true`
    return this.getCountriesRequest(url)
  }


  searchLenguages( term: lenguaje ){
    const url = `https://restcountries.com/v3.1/lang/${term}`
    return this.getCountriesRequest(url)
    .pipe(
      tap( countries => this.cacheStore.byLenguaje = { lenguaje: term, countries: countries})
     )
  }

  searchCode( code: string): Observable<Country | null >{
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    return this.http.get<Country[]>(url)
     .pipe(
      map( countries => countries.length > 0 ? countries[0]: null),
       catchError( error => {
          this.toastr.error(`No pudimos encontrar datos con el termino de busqueda "${ code }"`)
          return  of(null)
       })
     )
  }
}
