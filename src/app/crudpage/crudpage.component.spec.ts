import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudpageComponent } from './crudpage.component';

describe('CrudpageComponent', () => {
  let component: CrudpageComponent;
  let fixture: ComponentFixture<CrudpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
