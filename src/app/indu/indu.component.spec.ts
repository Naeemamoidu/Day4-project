import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InduComponent } from './indu.component';

describe('InduComponent', () => {
  let component: InduComponent;
  let fixture: ComponentFixture<InduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InduComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
