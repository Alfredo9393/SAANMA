import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProducts1Component } from './table-products1.component';

describe('TableProducts1Component', () => {
  let component: TableProducts1Component;
  let fixture: ComponentFixture<TableProducts1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableProducts1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableProducts1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
