import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../pokemon';
// import { HttpResponse } from '@angular/common/http';
// import { takeUntil } from 'rxjs/operators';
// import { DataService } from '../data.service';

@Component({
  selector: 'app-poke-api-call',
  templateUrl: './poke-api-call.component.html',
  styleUrls: ['./poke-api-call.component.css']
})

export class PokeApiCallComponent implements OnInit, OnDestroy {
  constructor(private http: HttpClient) { }
  pokeApiCall: Pokemon;
  destroy$: Subject<boolean> = new Subject<boolean>();
  // products: Product[] = [];

  public callPokemon(): void {
    this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${Math.floor((Math.random() * 649) + 1)}`).subscribe(data => {
      this.pokeApiCall = data;
    })
  }

  // not needed
  // handleDisplayTypes() {
  //     if(this.pokeApiCall.types.length === 1) {
  //         return 1;

  //     } else if (this.pokeApiCall.types.length === 2) {
  //         return this.pokeApiCall.types;
  //     } else {
  //         console.log('Types not available.');
  //     }
  // }

  public ngOnInit(): void {
    // this.dataService.sendGetRequest()
    //     .pipe(takeUntil(this.destroy$))
    //     .subscribe((res: HttpResponse<any[]>) => {
    //         console.log(res);
    //         this.pokeApiCall = res.body;
    //     })
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}