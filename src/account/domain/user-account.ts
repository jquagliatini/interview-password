export class UserAccount {
  readonly id: string;
  password: string;

  constructor(
    readonly email: string,
    password: string,
  ) {
    this.id = "123";
    this.email = email;
    this.password = password;
  }

  public changePassword(command: { password: string }): void {
    this.password = command.password;
  }
}
