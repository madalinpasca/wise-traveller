import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider
} from 'angular5-social-login';

export function getAuthServiceConfigs() {
  return new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider('216644568526-rfnee6msqb997vnblcba67mj1auprkaq.apps.googleusercontent.com')
    }
  ]);
}
