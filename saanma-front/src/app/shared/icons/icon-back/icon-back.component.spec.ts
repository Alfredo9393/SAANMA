import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBackComponent } from './icon-back.component';

describe('IconBackComponent', () => {
  let component: IconBackComponent;
  let fixture: ComponentFixture<IconBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
