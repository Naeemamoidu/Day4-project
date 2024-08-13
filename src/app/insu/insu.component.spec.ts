import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuComponent } from './insu.component';

describe('InsuComponent', () => {
  let component: InsuComponent;
  let fixture: ComponentFixture<InsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
