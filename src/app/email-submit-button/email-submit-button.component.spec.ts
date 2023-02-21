import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSubmitButtonComponent } from './email-submit-button.component';

describe('EmailSubmitButtonComponent', () => {
  let component: EmailSubmitButtonComponent;
  let fixture: ComponentFixture<EmailSubmitButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailSubmitButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailSubmitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
