"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_js_1 = __importDefault(require("../config/db.config.js"));
const sequelize_1 = __importDefault(require("sequelize"));
const sequelize = new sequelize_1.default(db_config_js_1.default.DB, db_config_js_1.default.user, db_config_js_1.default.password, {
    host: db_config_js_1.default.host,
    dialect: db_config_js_1.default.dialect,
    define: {
        freezeTableName: true,
    },
});
const db = {};
db.Sequelize = sequelize_1.default;
db.sequelize = sequelize;
db.books = require("./book.model.js")(sequelize, sequelize_1.default);
db.publishers = require("./publisher.model.js")(sequelize, sequelize_1.default);
db.comments = require("./comment.model.js")(sequelize, sequelize_1.default);
db.books.belongsTo(db.publishers, { foreignKey: 'publisher_id', targetKey: 'id' });
db.publishers.hasMany(db.books, { foreignKey: 'publisher_id', sourceKey: 'id' });
db.comments.belongsTo(db.books, { foreignKey: 'book_id', targetKey: 'id' });
db.books.hasMany(db.comments, { foreignKey: 'book_id', targetKey: 'id' });
module.exports = db;
