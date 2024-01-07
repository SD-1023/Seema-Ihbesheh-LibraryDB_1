import { Sequelize } from 'sequelize';
declare const CommentModel: (sequelize: Sequelize) => import("sequelize").ModelCtor<import("sequelize").Model<any, any>>;
export default CommentModel;
