export class UserAccount {
  id: string;
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.id = "123";
    this.email = email;
    this.password = password;
  }

  public changePassword(newPassword: string): void {
    this.password = newPassword;
  }
}
