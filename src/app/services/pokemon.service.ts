import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  async getByPage(){
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=20");
    const resJson = await res.json();

    return resJson

  }
  
  getById(){
    // https://pokeapi.co/api/v2/pokemon/
  }
  
  getByDescription(){
  
  }
}
