/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PqrPeticionComponent } from './pqr-peticion.component';

describe('PqrPeticionComponent', () => {
  let component: PqrPeticionComponent;
  let fixture: ComponentFixture<PqrPeticionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PqrPeticionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PqrPeticionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
