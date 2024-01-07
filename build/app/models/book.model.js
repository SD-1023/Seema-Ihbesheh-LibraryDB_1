import { DataTypes } from 'sequelize';
const BookModel = (sequelize) => {
    const Book = sequelize.define('book', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isbn: {
            type: DataTypes.STRING, // Change to STRING for alphanumeric ISBN
            allowNull: false,
            unique: true,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        pages: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        publisher_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
    return Book;
};
export default BookModel;
