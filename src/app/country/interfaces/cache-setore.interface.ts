import { Country } from "./country.interface";
import { lenguaje } from "./lenguaje.type";
import { Region } from "./region.type";

export interface CacheStore {
    byCountrie: TermCountries 
    byRegion:  RegionCountries
    byLenguaje: byLenguaje
    
}

export interface TermCountries {
    term: string;
    countries: Country[]
}
export interface RegionCountries {
    region?: Region;
    countries: Country[]
}
export interface byLenguaje {
    lenguaje?: lenguaje;
    countries: Country[]
}