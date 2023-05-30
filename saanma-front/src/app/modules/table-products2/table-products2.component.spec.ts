import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProducts2Component } from './table-products2.component';

describe('TableProducts2Component', () => {
  let component: TableProducts2Component;
  let fixture: ComponentFixture<TableProducts2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableProducts2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableProducts2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
