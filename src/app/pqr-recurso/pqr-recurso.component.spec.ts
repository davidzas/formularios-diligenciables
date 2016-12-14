/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PqrRecursoComponent } from './pqr-recurso.component';

describe('PqrRecursoComponent', () => {
  let component: PqrRecursoComponent;
  let fixture: ComponentFixture<PqrRecursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PqrRecursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PqrRecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
