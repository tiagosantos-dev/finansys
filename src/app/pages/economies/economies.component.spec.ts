import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomiesComponent } from './economies.component';

describe('EconomiesComponent', () => {
  let component: EconomiesComponent;
  let fixture: ComponentFixture<EconomiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EconomiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
