import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinifigEditComponent } from './minifig-edit.component';

describe('MinifigEditComponent', () => {
  let component: MinifigEditComponent;
  let fixture: ComponentFixture<MinifigEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinifigEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinifigEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
