import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedElementDropdownComponent } from './linked-element-dropdown.component';

describe('LinkedElementDropdownComponent', () => {
  let component: LinkedElementDropdownComponent;
  let fixture: ComponentFixture<LinkedElementDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedElementDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedElementDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
