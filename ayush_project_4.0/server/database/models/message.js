module.exports = (sequelize, DataTypes) => {
  const payment = sequelize.define(
    "message",
    {
      message: { type: DataTypes.STRING },
      users: { type: DataTypes.ARRAY },
      sender: { type: DataTypes.UUID },
      received_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    { freezeTableName: true, underscored: true, timestamps: true }
  );
  message.associate = (models) => {
    order.hasMany(models.user, {
      foreignKey: "public_id",
    });
  };
  return message;
};
