const Instituicao = require('../models/Instituicao');

exports.create = async (req, res) => {
	const instituicao = req.body;

	await Instituicao.create(instituicao)
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
	await Instituicao.findAll()
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
	await Instituicao.findOne({
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
	await Instituicao.update({
		nome: req.body.nome,
		rua: req.body.rua,
		bairro: req.body.bairro,
		cidade: req.body.cidade,
		data_inauguracao: req.body.data_inauguracao
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
	await Instituicao.destroy({
		where: {
			id: req.params.id
		}
	});
}