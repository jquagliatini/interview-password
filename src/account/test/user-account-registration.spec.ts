import { IUserAccountRepository } from "../domain/i-user-account-repository";
import { UserAccountRegistration } from "../domain/user-account-registration";
import { mock } from "jest-mock-extended";
import { UserAccount } from "../domain/usera-account";

describe("UserAccountRegistration", () => {
  let userAccountRegistration: UserAccountRegistration;
  let mockUserAccountRepository: IUserAccountRepository;

  beforeEach(() => {
    mockUserAccountRepository = mock<IUserAccountRepository>();
    userAccountRegistration = new UserAccountRegistration(
      mockUserAccountRepository
    );
  });

  it("should register a user account", async () => {
    const email = "test@example.com";
    const password = "password123";

    await userAccountRegistration.register(email, password);

    expect(mockUserAccountRepository.save).toHaveBeenCalledWith({
      email,
      password,
      id: expect.any(String),
    });
  });

  it("should change a user account password", async () => {
    const userId = "123";
    const newPassword = "newPassword123";

    jest
      .spyOn(mockUserAccountRepository, "get")
      .mockResolvedValue(new UserAccount("123", "password123"));

    await userAccountRegistration.changePassword(userId, newPassword);

    expect(mockUserAccountRepository.get).toHaveBeenCalledWith(userId);
    expect(mockUserAccountRepository.save).toHaveBeenCalled();
  });
});
