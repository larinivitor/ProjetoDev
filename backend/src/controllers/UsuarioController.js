const Usuario = require('../models/Usuario');

exports.create = async (req, res) => {
	const usuario = req.body;

	await Usuario.create(usuario)
		.then(data => {
			res.json(data);
		})
		.catch(err => {
			res.status(500).json({
				message: err.message
			});
		});
};

exports.index = async (req, res) => {
	await Usuario.findAll()
		.then(data => {
			res.json(data);
		})
		.catch(err => {
			res.status(500).json({
				message: err.message
			});
		});
}

exports.find = async (req, res) => {
	await Usuario.findOne({
		where: {
			id: req.params.id
		}
	})
	.then(data => {
		res.json(data);
	})
	.catch(err => {
		res.status(500).json({
			message: err.message
		});
	});
}

exports.update = async (req, res) => {
	await Usuario.update({
		usuario: req.body.username,
		senha: req.body.password
	}, {
		where: {
			id: req.params.id
		}
	})
	.then(data => {
		res.json(data);
	})
	.catch(err => {
		res.status(500).json({
			message: err.message
		});
	});
}

exports.destroy = async (req, res) => {
	await Usuario.destroy({
		where: {
			id: req.params.id
		}
	});
}