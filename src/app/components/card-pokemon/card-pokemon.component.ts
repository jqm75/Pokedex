import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Result } from 'src/app/interfaces/pokeapi';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss']
})
export class CardPokemonComponent implements OnChanges{

  constructor(private PokemonService: PokemonService){

  }

  ngOnChanges(): void {
    this.extractInfo()
  }

  fullData(){}

  @Input() data?:Result;
  id:string = "0";

  extractInfo(){
    if(this.data){
      this.id = this.data.url.substring( 34, this.data.url.length -1 )
      this.PokemonService.getById(this.id)
    }
  }
}
