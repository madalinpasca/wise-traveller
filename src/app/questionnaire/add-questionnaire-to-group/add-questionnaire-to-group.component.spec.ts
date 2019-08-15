import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestionnaireToGroupComponent } from './add-questionnaire-to-group.component';

describe('AddQuestionnaireToGroupComponent', () => {
  let component: AddQuestionnaireToGroupComponent;
  let fixture: ComponentFixture<AddQuestionnaireToGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQuestionnaireToGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuestionnaireToGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
