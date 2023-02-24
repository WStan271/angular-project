import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailpageComponent } from './emailpage.component';

describe('EmailpageComponent', () => {
  let component: EmailpageComponent;
  let fixture: ComponentFixture<EmailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
