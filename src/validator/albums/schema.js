const Joi = require('joi');

const AlbumPayloadSchema = Joi.object({
    name: Joi.string().required(),
    year: Joi.number().required()
    // const currentYear = new Date().getFullYear();
    // Joi.number().integer().min(1900).max(currentYear).required();
})


module.exports = { AlbumPayloadSchema };