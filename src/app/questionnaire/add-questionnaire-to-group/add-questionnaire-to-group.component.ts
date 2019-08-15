import {Component, OnInit} from '@angular/core';
import {Questionnaire} from "../../domain/Questionnaire";
import {Group} from "../../domain/Group";
import {GroupService} from "../../service/group.service";
import {QuestionnaireService} from "../../service/questionnaire.service";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-add-questionnaire-to-group',
  templateUrl: './add-questionnaire-to-group.component.html',
  styleUrls: ['./add-questionnaire-to-group.component.css']
})
export class AddQuestionnaireToGroupComponent implements OnInit {
  selectedQuestionnaireId: number;
  selectdGroupId: number;
  questionnairesWithUserOwner: Questionnaire[];
  groupsOwnByUser: Group[];

  constructor(private groupService: GroupService,
              private questionnaireService: QuestionnaireService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    let userId = parseInt(localStorage.getItem("userId"));

    this.groupService.groupsOwnByUser(userId).subscribe(groups => {
      this.groupsOwnByUser = groups;
    })


    this.questionnaireService.getAllCreatedQuestionnaires(userId).subscribe(
      questionnaires => {
        this.questionnairesWithUserOwner = questionnaires;
      })
  }

  assignQuestionnareToGroup() {
    this.questionnaireService.assignQuestionnaireToGroup(this.selectedQuestionnaireId, this.selectdGroupId).subscribe(
      message => {
        this.displayPopup(message, "Close");
      }, err => {
        this.displayPopup(err.error.message, "Close")
      }
    )
  }

  private displayPopup(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 6000
    });
  }
}
