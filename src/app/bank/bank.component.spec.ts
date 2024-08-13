import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BANKComponent } from './bank.component';

describe('BANKComponent', () => {
  let component: BANKComponent;
  let fixture: ComponentFixture<BANKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BANKComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BANKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
