const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        image: { type: String, required: true },
        description: { type: String, required: true },
        rating: { type: Number, required: true },
        numReviews: { type: Number, required: true }, // Ensure this field is required
        price: { type: Number, required: true },
        countInStock: { type: Number, required: true } // Ensure this field is required
    },
    {
        timestamps: true // Automatically adds createdAt and updatedAt fields
    }
);

module.exports = mongoose.model('Product', productSchema);
