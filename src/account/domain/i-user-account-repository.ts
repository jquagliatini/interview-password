import { UserAccount } from "./usera-account";

export interface IUserAccountRepository {
  save(userAccount: UserAccount): Promise<void>;
  get(userId: string): Promise<UserAccount>;
}
