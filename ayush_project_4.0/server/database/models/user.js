module.exports = (sequelize, DataTypes) => {
  const payment = sequelize.define(
    "user",
    {
      public_id: { type: DataTypes.UUID, unique: true, allowNull: false },
      username: { type: DataTypes.STRING, unique: true, allowNull: false },
      email: { type: DataTypes.STRING, unique: true, allowNull: false },
      password: { type: DataTypes.STRING, unique: true, allowNull: false },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    { freezeTableName: true, underscored: true, timestamps: true }
  );
  return user;
};
