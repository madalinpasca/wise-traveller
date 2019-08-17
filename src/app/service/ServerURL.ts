export class ServerURL {
  public static host = 'http://localhost:8080';
  public static facebookLogin = ServerURL.host + '/unauthenticated/authorize/facebook';
  public static googleLogin = ServerURL.host + 'http://localhost:8080/unauthenticated/authorize/google';
  public static oauthLogin = ServerURL.host + 'http://localhost:8080/oauth/token';
  public static uploadProfilePicture = ServerURL.host + 'http://localhost:8080/unauthenticated/upload-avatar/10';

  // public static userController = ServerURL.ENDPOINT + "/user"
  // public static loginUser = ServerURL.userController + "/login"
  // public static getUserByEmail = ServerURL.userController + "/findUserByEmail/";
  // public static addUser = ServerURL.userController + "/add";
  //
  //
  // public static groupController = ServerURL.ENDPOINT + "/group"
  // public static addGroup = ServerURL.groupController + "/add";
  // public static userFromUserGroups = ServerURL.userController + "/userFromUserGroups/";
  // public static groupsOwnByUser = ServerURL.groupController + "/userIsOwner/";
  // public static addUserToGroup = ServerURL.userController + "/addUserToGroup";
  //
  //
  // public static questionnaireController = ServerURL.ENDPOINT + "/questionnaire";
  // public static allCreatedQuestionnaires = ServerURL.questionnaireController + "/allCreatedQuestionnaires";
  // public static assignQuestionnaireToGroup = ServerURL.questionnaireController + "/assignQuestionnaireToGroup";
}
