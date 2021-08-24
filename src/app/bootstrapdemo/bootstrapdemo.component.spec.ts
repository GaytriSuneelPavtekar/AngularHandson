import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapdemoComponent } from './bootstrapdemo.component';

describe('BootstrapdemoComponent', () => {
  let component: BootstrapdemoComponent;
  let fixture: ComponentFixture<BootstrapdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
