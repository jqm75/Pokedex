import { Injectable } from '@angular/core';
import { Result } from '../interfaces/pokeapi';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  async getByPage(): Promise <Result[]>{
    const res = await fetch( "https://pokeapi.co/api/v2/pokemon?limit=10&offset=10" );
    const resJson = await res.json();
    if( resJson.results.length > 0 ) return resJson.results;
    return[];

  }
  
  getById(){
    // https://pokeapi.co/api/v2/pokemon/
  }
  
  getByDescription(){
  
  }
}
