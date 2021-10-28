const express = require('express')
const Product = require('../models/Product')
const router = express.Router()

router.get('/', (req, res, next) => {
  Product.find()
    .then(data => res.status(200).json(data))
    .catch(error =>
      next({ status: 404, message: error.message || 'Document not found' })
    )
})

module.exports = router
