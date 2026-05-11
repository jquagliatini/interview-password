import { UserAccount } from "./user-account";

export interface UserAccountRepository {
  persist(userAccount: UserAccount): Promise<void>;
  find(userId: string): Promise<UserAccount>;
}
