"use strict";
// filename: dbConfig.ts
Object.defineProperty(exports, "__esModule", { value: true });
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'seema123.I',
    DB: 'nodesql',
    dialect: 'mysql',
    define: {
        freezeTableName: true,
    },
};
exports.default = dbConfig;
