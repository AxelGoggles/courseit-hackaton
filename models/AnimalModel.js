const mongoose = require ('mongoose');

const AnimalSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'por favor agregar nombre'],
    },
    description: {
        type: String,
    },
    species: {
        type: String,
        required: [true, 'por favor agregar especie'],
    },
    breed: {
        type: String,
    },
    age: {
        type: Number,
    },
    gender: {
        type: String,
        required: [true, 'por favor agregar género del gato'],
    },
    size: {
        type: String,
        required: true,
    },
    spayed: {
        type: Boolean,
        default: false,
    },
    vaccinated: {
        type: Boolean,
        default: false,
    },
    color: {
        type: String,
    },
    special_needs: {
        type: String,
    },
    good_with_dogs: {
        type: Boolean,
        default: false,
    },
    good_with_cats: {
        type: Boolean,
        default: false,
    },
    photo: {
        type: String,
    },
});

module.exports = mongoose.models.AnimalModel || mongoose.model('Animals', AnimalSchema);