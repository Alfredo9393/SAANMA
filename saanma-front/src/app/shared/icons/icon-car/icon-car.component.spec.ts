import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCarComponent } from './icon-car.component';

describe('IconCarComponent', () => {
  let component: IconCarComponent;
  let fixture: ComponentFixture<IconCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
