import { DataTypes } from 'sequelize';
const PublisherModel = (sequelize) => {
    const Publisher = sequelize.define('publisher', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });
    return Publisher;
};
export default PublisherModel;
