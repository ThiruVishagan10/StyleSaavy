const router = require("express").Router();
const User = require("./models/User");
const users = require("./data/user");
const Product = require("./models/Product");
const products = require("./data/Products");
const AsynHandler = require("express-async-handler");

router.post('/users', AsynHandler(
    async (req, res) => {
        await User.deleteMany({});
        const UserSeeder = await User.insertMany(users);
        res.send({ UserSeeder });
    }
)
);

router.post('/products',AsynHandler(
    async (req, res) => {
        await Product.deleteMany({});
        const ProductSeeder = await Product.insertMany(products); // Corrected line
        res.send({ ProductSeeder });
    }
)
);



// router.post('/products', async (req, res) => {
//     await Product.deleteMany({});
//     const ProductSeeder = await Product.insertMany(products); // Corrected line
//     res.send({ ProductSeeder });
// });

// router.post('/users', async (req, res) => {
//     await User.deleteMany({});
//     const UserSeeder = await User.insertMany(users);
//     res.send({ UserSeeder });
// });

module.exports = router;
