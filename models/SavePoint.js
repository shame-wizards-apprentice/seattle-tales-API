// Create SavePoint table
module.exports = (sequelize, DataTypes) => {
    const SavePoint = sequelize.define(`SavePoint`, {
        state: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    // User association
    SavePoint.associate = (models) => {
        SavePoint.belongsTo(models.User, {
            onDelete: `cascade`,
            foreignKey: {
                name: `UserId`,
                allowNull: false
            }
        });
    }

    return SavePoint
}