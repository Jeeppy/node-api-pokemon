module.exports = (sequelize, Datatypes) => {
  return sequelize.define('User', {
    id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: Datatypes.STRING,
      unique: {
        msg: 'Le nom est déjà pris.'
      }
    },
    password: {
      type: Datatypes.STRING
    }
  })
}
