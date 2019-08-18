export class ServerURL {
  public static host = 'http://localhost:8080';
  public static facebookLogin = ServerURL.host + '/unauthenticated/authorize/facebook/';
  public static googleLogin = ServerURL.host + '/unauthenticated/authorize/google/';
  public static oauthLogin = ServerURL.host + '/oauth/token';
  public static uploadProfilePicture = ServerURL.host + '/unauthenticated/upload-avatar/';
  public static register = ServerURL.host + '/unauthenticated/addUser/';
  public static resetPasswordNotLogged = ServerURL.host + '/unauthenticated/resetPassword/';
  public static currentUser = ServerURL.host + '/authenticated/me'
}
