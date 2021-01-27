import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeApiCallComponent } from './poke-api-call.component';

describe('PokeApiCallComponent', () => {
  let component: PokeApiCallComponent;
  let fixture: ComponentFixture<PokeApiCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeApiCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeApiCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
