const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Instituicao = sequelize.define('instituicoes', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	nome: {
		type: DataTypes.STRING,
		allowNull: false
	},
	rua: {
		type: DataTypes.STRING,
		allowNull: false
	},
	bairro: {
		type: DataTypes.STRING,
		allowNull: false
	},
	cidade: {
		type: DataTypes.STRING,
		allowNull: false
	},
	data_inauguracao: {
		type: DataTypes.DATE,
		allowNull: false
	}
}, {
	timestamps: true
});

module.exports = Instituicao;