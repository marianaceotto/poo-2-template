import { TAccountDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";


    export class AccountDatabase extends BaseDatabase {
        public static TABLE_ACCOUNTS = "accounts"
    
        public async findAccounts() {
            const accountsDB: TAccountDB[] = await BaseDatabase
                .connection(AccountDatabase.TABLE_ACCOUNTS)
    
            return accountsDB
        }
    }