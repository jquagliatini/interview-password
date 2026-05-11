import { mock, MockProxy } from "jest-mock-extended";
import { UserAccount } from "../domain/user-account";
import { UserAccountRegistration } from "../domain/user-account-registration";
import { UserAccountRepository } from "../domain/user-account.repository";

describe("UserAccountRegistration", () => {
  let userAccountRegistration: UserAccountRegistration;
  let mockUserAccountRepository: MockProxy<UserAccountRepository>;

  beforeEach(() => {
    mockUserAccountRepository = mock<UserAccountRepository>();
    userAccountRegistration = new UserAccountRegistration(mockUserAccountRepository);
  });

  it("should register a user account", async () => {
    const email = "test@example.com";
    const password = "password123";

    await userAccountRegistration.register({ email, password });

    expect(mockUserAccountRepository.persist).toHaveBeenCalledWith({
      email,
      password,
      id: expect.any(String),
    });
  });

  it("should change a user account password", async () => {
    const newPassword = "newPassword123";
    const email = "test@gmail.com";
    const mockUserAccount = new UserAccount(email, "password123");
    mockUserAccountRepository.find.mockResolvedValue(mockUserAccount);

    await userAccountRegistration.changePassword({ userId: mockUserAccount.id, newPassword });

    expect(mockUserAccountRepository.find).toHaveBeenCalledWith(mockUserAccount.id);
    expect(mockUserAccountRepository.persist).toHaveBeenCalledWith({
      email,
      password: newPassword,
      id: mockUserAccount.id,
    });
  });
});
