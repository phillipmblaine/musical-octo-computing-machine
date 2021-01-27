import { Component, OnInit, OnDestroy } from '@angular/core';
import { Website } from '../website';

@Component({
    selector: 'app-extra',
    templateUrl: './extra.component.html',
    styleUrls: ['./extra.component.css']
})

export class ExtraComponent implements OnInit, OnDestroy {
    constructor() { }
    ngOnInit() { }
    ngOnDestroy() { }

    // for the mat-select options
    websites: Website[] = [
        { value: '1', viewValue: 'Example 1' },
        { value: '2', viewValue: 'Example 2' },
        { value: '3', viewValue: 'Example 3' },
        { value: '4', viewValue: 'Example 4' }
    ];
}