import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocoComponent } from './loco.component';

describe('LocoComponent', () => {
  let component: LocoComponent;
  let fixture: ComponentFixture<LocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
