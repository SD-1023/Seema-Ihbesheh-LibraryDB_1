export interface DbConfig {
    host: string;
    user: string;
    password: string;
    DB: string;
    dialect: string;
    define: {
        freezeTableName: boolean;
    };
}
declare const dbConfig: DbConfig;
export default dbConfig;
