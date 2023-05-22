module.exports = {
  up: (queryInterface, DataTypes) =>
    queryInterface.createTable("user", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      public_id: {
        type: DataTypes.UUID,
        unique: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        min: 3,
        max: 20,
        unique: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        max: 50,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        min: 8,
        allowNull: false,
      },
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
    }),
  down: (queryInterface) => queryInterface.dropTable("user"),
};
