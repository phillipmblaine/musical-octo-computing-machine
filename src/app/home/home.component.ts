import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { HttpResponse } from '@angular/common/http';

import { Product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
  constructor(private dataService: DataService) { }

  products: Product[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();

  // perhaps this functionality could be put into a separate component and inherited?
  public firstPage() {
    this.products = [];
    this.dataService.sendGetRequestToUrl(this.dataService.first).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<Product[]>) => {
      console.log(res);
      this.products = res.body;
    })
  }

  public previousPage() {
    if (this.dataService.prev !== undefined && this.dataService.prev !== '') {
      this.products = [];
      this.dataService.sendGetRequestToUrl(this.dataService.prev).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<Product[]>) => {
        console.log(res);
        this.products = res.body;
      })
    }
  }

  public nextPage() {
    if (this.dataService.next !== undefined && this.dataService.next !== '') {
      this.products = [];
      this.dataService.sendGetRequestToUrl(this.dataService.next).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<Product[]>) => {
        console.log(res);
        this.products = res.body;
      })
    }
  }

  public lastPage() {
    this.products = [];
    this.dataService.sendGetRequestToUrl(this.dataService.last).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<Product[]>) => {
      console.log(res);
      this.products = res.body;
    })
  }

  ngOnInit() {
    console.log('Home Component');

    this
      .dataService
      .sendGetRequest()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: HttpResponse<Product[]>) => {
        console.log(res);
        this.products = res.body;
      })

    // setTimeout(() => console.log(this.products), 5000)

    // setTimeout(() => console.log(this.dataService.sendGetRequest().subscribe((a: any[]) => {
    //   console.log(a);
    // }
    // )), 3000)

  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

}