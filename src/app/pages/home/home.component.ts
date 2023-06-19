import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private pokemonService: PokemonService){} 

  pokemonList= [];

  ngOnInit(): void {
    this.loadList();
  }
  
  async loadList(){
    this.pokemonList = [...this.pokemonList, ...await this.pokemonService.getByPage()];
  }

}
