import { Component, OnInit, OnDestroy } from '@angular/core';
// import { DataService } from '../data.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { HttpResponse, HttpClient } from '@angular/common/http';
import { Pokemon } from '../pokemon';

// import { Product } from '../product';

@Component({
    selector: 'app-extra',
    templateUrl: './extra.component.html',
    styleUrls: ['./extra.component.css']
})

export class ExtraComponent implements OnInit, OnDestroy {
    // constructor(private dataService: DataService) { }
    constructor(private http: HttpClient) { }

    // products: Product[] = [];

    pokeApiCall: Pokemon;
    destroy$: Subject<boolean> = new Subject<boolean>();

    callPokemon() {
        this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${Math.floor((Math.random() * 649) + 1)}`).subscribe(data => {
            // console.log(data);
            this.pokeApiCall = data;
            console.log('pokeApiCall:', this.pokeApiCall)
            // console.log('pokeApiCall:', this.pokeApiCall.id)
            // console.log('pokeApiCall:', this.pokeApiCall.name)
            console.log('Types:', this.pokeApiCall.types)
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

    ngOnInit(): void {
        console.log('Extra Component');
        // this.dataService.sendGetRequest()
        //     .pipe(takeUntil(this.destroy$))
        //     .subscribe((res: HttpResponse<any[]>) => {
        //         console.log(res);
        //         this.pokeApiCall = res.body;
        //     })
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}