import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameStoreComponent } from './name-store.component';

describe('NameStoreComponent', () => {
  let component: NameStoreComponent;
  let fixture: ComponentFixture<NameStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
