import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestionnaireComponent } from './home-page.component';

describe('AddQuestionnaireComponent', () => {
  let component: AddQuestionnaireComponent;
  let fixture: ComponentFixture<AddQuestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQuestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
