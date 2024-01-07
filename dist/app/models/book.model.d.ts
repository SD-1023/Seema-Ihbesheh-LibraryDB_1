import { Sequelize } from 'sequelize';
declare const BookModel: (sequelize: Sequelize) => import("sequelize").ModelCtor<import("sequelize").Model<any, any>>;
export default BookModel;
