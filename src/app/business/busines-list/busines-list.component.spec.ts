import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesListComponent } from './busines-list.component';

describe('BusinesListComponent', () => {
  let component: BusinesListComponent;
  let fixture: ComponentFixture<BusinesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
