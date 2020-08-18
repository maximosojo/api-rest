'use strict'

module.exports = (sequelize, DataTypes) => {
  	const User = sequelize.define("users",{
      		id: { type: DataTypes.SMALLINT, primaryKey: true },
			email: { type: DataTypes.STRING, unique: true, lowercase: true },
			password: { type: DataTypes.STRING, select: false },
			createdAt: { type: DataTypes.DATE, default: Date.now() },
			lastLogin: DataTypes.DATE
    	}
  	)  	
  	return User;
};
