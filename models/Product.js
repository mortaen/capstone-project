const mongoose = require('mongoose')
const { string } = require('prop-types')

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    ingredients: {
      type: Array,
      required: false,
    },
    nutritionFacts: {
      type: Object,
      required: false,
    },
    stores: {
      type: Array,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    categories: {
      type: Array,
      required: false,
    },
    price: {
      type: String,
      required: false,
    },
  },
  { versionKey: false }
)

module.exports = mongoose.model('Product', schema)
