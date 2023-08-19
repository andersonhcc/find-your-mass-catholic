
import { login } from "../services/login";

declare type LoginAction = 'sucess' | 'failure';

export interface LoginResult {
  action: LoginAction;
  error?: string;
}

export class UserModel {
  public authenticationToken: string | null = null;

  public rememberMe: boolean = true;

  public async login(): Promise<LoginResult> {
    const response = await login();
    if (response) {
      return {
        action: "sucess",
      }
    }
    return {
      action: "failure"
    }
  }

}
