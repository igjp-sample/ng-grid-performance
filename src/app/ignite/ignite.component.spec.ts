import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgniteComponent } from './ignite.component';

describe('IgniteComponent', () => {
  let component: IgniteComponent;
  let fixture: ComponentFixture<IgniteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgniteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
