import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { HttpResponse } from '@angular/common/http';

import { Product } from '../product';

@Component({
    selector: 'app-extra',
    templateUrl: './extra.component.html',
    styleUrls: ['./extra.component.css']
})

export class ExtraComponent implements OnInit, OnDestroy {
    constructor(private dataService: DataService) { }

    products: Product[] = [];
    destroy$: Subject<boolean> = new Subject<boolean>();



    ngOnInit(): void {
        console.log('Extra Component');
        this.dataService.sendGetRequest()
            .pipe(takeUntil(this.destroy$))
            .subscribe((res: HttpResponse<Product[]>) => {
                console.log(res);
                this.products = res.body;
            })


    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}