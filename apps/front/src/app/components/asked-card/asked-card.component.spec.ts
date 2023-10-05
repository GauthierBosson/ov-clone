import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AskedCardComponent } from './asked-card.component';

describe('AskedCardComponent', () => {
  let component: AskedCardComponent;
  let fixture: ComponentFixture<AskedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AskedCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AskedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
