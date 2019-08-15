export class ServerURLs {
  public static ENDPOINT = 'localhost:8080';

  public static userController = ServerURLs.ENDPOINT + "/user"
  public static loginUser = ServerURLs.userController + "/login"
  public static getUserByEmail = ServerURLs.userController + "/findUserByEmail/";
  public static addUser = ServerURLs.userController + "/add";


  public static groupController = ServerURLs.ENDPOINT + "/group"
  public static addGroup = ServerURLs.groupController + "/add";
  public static userFromUserGroups = ServerURLs.userController + "/userFromUserGroups/";
  public static groupsOwnByUser = ServerURLs.groupController + "/userIsOwner/";
  public static addUserToGroup = ServerURLs.userController + "/addUserToGroup";


  public static questionnaireController = ServerURLs.ENDPOINT + "/questionnaire";
  public static allCreatedQuestionnaires = ServerURLs.questionnaireController + "/allCreatedQuestionnaires";
  public static assignQuestionnaireToGroup = ServerURLs.questionnaireController + "/assignQuestionnaireToGroup";
}
