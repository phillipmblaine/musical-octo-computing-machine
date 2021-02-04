import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-poke-api-call',
  templateUrl: './poke-api-call.component.html',
  styleUrls: ['./poke-api-call.component.css']
})

export class PokeApiCallComponent implements OnInit, OnDestroy {
  constructor(private http: HttpClient) { }
  pokeApiCall: Pokemon;
  destroy$: Subject<boolean> = new Subject<boolean>();

  public callPokemon(): void {
    this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${Math.floor((Math.random() * 649) + 1)}`).subscribe(data => {
      this.pokeApiCall = data;
    })
  }

  public ngOnInit(): void { }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}