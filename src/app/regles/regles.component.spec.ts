/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReglesComponent } from './regles.component';

describe('ReglesComponent', () => {
  let component: ReglesComponent;
  let fixture: ComponentFixture<ReglesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReglesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
