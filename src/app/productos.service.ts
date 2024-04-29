import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  baseURL: string = "https://pokeapi.co/api/v2/ability/21/";

  constructor(private http:HttpClient) {

   }

   getAll(){

    return this.http.get("https://pokeapi.co/api/v2/ability/?limit=20&offset=20");
   }

   getById(id:string){

    return this.http.get("https://api.mercadolibre.com/items/"+id);

   }
  
  getPokemons(index:any)
  {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${index}`);
  }
}
