const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Event name is required'],
		trim: true,
	},

	date: {
		type: Date,
		required: [true, 'Event date is required'],
	},

	time: {
		type: String,
		required: [true, 'Event time is required'],
		trim: true,
	},

	venue: {
		type: String,
		required: [true, 'Venue is required'],
		trim: true,
	},

	fee: {
		type: Number,
		default: 0,
		min: [0, 'Fee cannot be negative'],
	},

	contact: {
		type: String,
		required: [true, 'Contact is required'],
		trim: true,
		match: [/^\+?[0-9\s\-()]{7,20}$/, 'Please enter a valid contact number'],
	},

	description: {
		type: String,
		trim: true,
		default: '',
	},

	seats: {
		type: Number,
		default: 0,
		min: [0, 'Seats cannot be negative'],
	},

	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: [true, 'Event creator is required'],
	},

}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);


