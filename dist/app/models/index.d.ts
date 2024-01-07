import { Sequelize } from 'sequelize-typescript';
interface Db {
    Sequelize: typeof Sequelize;
    sequelize: Sequelize;
    books: any;
    publishers: any;
    comments: any;
}
declare const db: Db;
export default db;
