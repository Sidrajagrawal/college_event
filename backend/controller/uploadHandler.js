const Event = require('../model/Event');
const { createEventSchema } = require('../validation/Event');

async function uploadHandler(req, res) {
    try {
        const value = await createEventSchema.validateAsync(req.body);
        const creatorId = (req.user && (req.user._id || req.user.id));
        if (!creatorId) {
            return res.status(400).json({ msg: 'Creator (user) is required to create event' });
        }

        const eventData = { ...value, createdBy: creatorId };
        const event = new Event(eventData);
        await event.save();
        return res.status(201).json({ msg: 'Event created successfully', event });
    } catch (err) {
        if (err.isJoi && err.details) {
            const details = err.details.map(d => d.message);
            return res.status(400).json({ msg: 'Validation failed', errors: details });
        }
        return res.status(500).send({ msg: "Server Error", err: err.message });
    }
}

module.exports.uploadHandler = uploadHandler


