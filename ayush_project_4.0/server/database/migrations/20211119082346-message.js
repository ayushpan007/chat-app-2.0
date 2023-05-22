module.exports = {
  up: (queryInterface, DataTypes) =>
    queryInterface.createTable("message", {
      message: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      users: {
        type: DataTypes.ARRAY,
      },
      sender: {
        type: DataTypes.UUID,
        references: {
          model: "user",
          key: "username",
        },
      },
      received_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    }),
  down: (queryInterface) => queryInterface.dropTable("user_model"),
};
