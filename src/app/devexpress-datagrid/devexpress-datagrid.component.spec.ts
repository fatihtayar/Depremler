/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DevexpressDatagridComponent } from './devexpress-datagrid.component';

describe('DevexpressDatagridComponent', () => {
  let component: DevexpressDatagridComponent;
  let fixture: ComponentFixture<DevexpressDatagridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevexpressDatagridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevexpressDatagridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
