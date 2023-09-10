import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleLeftComponent } from './title-left.component';

describe('TitleLeftComponent', () => {
  let component: TitleLeftComponent;
  let fixture: ComponentFixture<TitleLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
