import { UserAccount } from "./user-account";
import { UserAccountRepository } from "./user-account.repository";

export class UserAccountRegistration {
  private userAccountRepository: UserAccountRepository;

  constructor(userAccountRepository: UserAccountRepository) {
    this.userAccountRepository = userAccountRepository;
  }

  async register(command: { email: string; password: string }): Promise<void> {
    const userAccount = new UserAccount(command.email, command.password);
    await this.userAccountRepository.persist(userAccount);
  }

  async changePassword(command: { userId: string; newPassword: string }): Promise<void> {
    const userAccount = await this.userAccountRepository.find(command.userId);
    userAccount.changePassword({ password: command.newPassword });
    await this.userAccountRepository.persist(userAccount);
  }
}
