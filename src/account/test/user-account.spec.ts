import { UserAccount } from "../domain/user-account";

describe("UserAccount", () => {
  let userAccount: UserAccount;

  beforeEach(() => {
    userAccount = new UserAccount("test@example.com", "oldPassword");
  });

  test("changePassword changes the password", () => {
    userAccount.changePassword({ password: "newPassword" });

    expect(userAccount.password).toBe("newPassword");
  });
});
