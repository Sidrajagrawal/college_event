const Joi = require('joi');

const createEventSchema = Joi.object({
	name: Joi.string()
		.min(2)
		.max(100)
		.required()
		.messages({
			'string.empty': 'Event name is required',
			'string.min': 'Event name must be at least 2 characters',
			'string.max': 'Event name cannot exceed 100 characters',
		}),

	date: Joi.date()
		.iso()
		.required()
		.messages({
			'date.base': 'Event date must be a valid date',
			'date.format': 'Event date must be in ISO format',
			'any.required': 'Event date is required',
		}),

	time: Joi.string()
		.pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
		.required()
		.messages({
			'string.empty': 'Event time is required',
			'string.pattern.base': 'Time must be in HH:MM 24-hour format',
		}),

	venue: Joi.string()
		.min(2)
		.max(200)
		.required()
		.messages({
			'string.empty': 'Venue is required',
		}),

	fee: Joi.number()
		.min(0)
		.default(0)
		.messages({
			'number.base': 'Fee must be a number',
			'number.min': 'Fee cannot be negative',
		}),

	contact: Joi.string()
		.pattern(/^\+?[0-9\s\-()]{7,20}$/)
		.required()
		.messages({
			'string.empty': 'Contact is required',
			'string.pattern.base': 'Please enter a valid contact number',
		}),

	description: Joi.string()
		.max(2000)
		.allow('')
		.messages({
			'string.max': 'Description cannot exceed 2000 characters',
		}),

	seats: Joi.number()
		.integer()
		.min(0)
		.default(0)
		.messages({
			'number.base': 'Seats must be a number',
			'number.min': 'Seats cannot be negative',
		}),
  createdBy: Joi.string()
    .hex()
    .length(24)
    .messages({
      'string.hex': 'createdBy must be a valid user id',
      'string.length': 'createdBy must be a 24 character ObjectId',
    }),
});

const updateEventSchema = Joi.object({
	name: Joi.string().min(2).max(100).messages({ 'string.min': 'Event name must be at least 2 characters' }),
	date: Joi.date().iso().messages({ 'date.base': 'Event date must be a valid date' }),
	time: Joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d)$/).messages({ 'string.pattern.base': 'Time must be in HH:MM 24-hour format' }),
	venue: Joi.string().min(2).max(200),
	fee: Joi.number().min(0).messages({ 'number.min': 'Fee cannot be negative' }),
	contact: Joi.string().pattern(/^\+?[0-9\s\-()]{7,20}$/).messages({ 'string.pattern.base': 'Please enter a valid contact number' }),
	description: Joi.string().max(2000),
	seats: Joi.number().integer().min(0).messages({ 'number.min': 'Seats cannot be negative' }),
  createdBy: Joi.string().hex().length(24).messages({ 'string.hex': 'createdBy must be a valid user id' }),
});

module.exports = {
	createEventSchema,
	updateEventSchema,
};

