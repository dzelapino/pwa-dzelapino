import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinifigFormComponent } from './minifig-form.component';

describe('MinifigFormComponent', () => {
  let component: MinifigFormComponent;
  let fixture: ComponentFixture<MinifigFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinifigFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinifigFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
