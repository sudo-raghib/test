const mongoose = require('mongoose')

const PriceFactorSchema = new mongoose.Schema({
  vehicleType: { type: String, required: true, unique: true },
  baseFare: { type: Number, required: true },
  perKilometerRate: { type: Number, required: true },
  perKilogramRate: { type: Number, required: true },
  region: { type: String },
})

module.exports = mongoose.model('PriceFactor', PriceFactorSchema)
