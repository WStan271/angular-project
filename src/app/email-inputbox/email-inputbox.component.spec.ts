import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailInputboxComponent } from './email-inputbox.component';

describe('EmailInputboxComponent', () => {
  let component: EmailInputboxComponent;
  let fixture: ComponentFixture<EmailInputboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailInputboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailInputboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
