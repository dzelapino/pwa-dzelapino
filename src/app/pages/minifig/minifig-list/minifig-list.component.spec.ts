import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinifigListComponent } from './minifig-list.component';

describe('ListComponent', () => {
  let component: MinifigListComponent;
  let fixture: ComponentFixture<MinifigListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinifigListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinifigListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
