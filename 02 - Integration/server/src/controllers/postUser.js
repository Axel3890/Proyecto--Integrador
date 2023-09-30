const { User } = require('../db/connection');

const postUser = async (req, res) => {
    try {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({msg: 'Missing required fields'});
    }
    await User.findOrCreate({
        where: {email, password }
    });
        res.status(201).json("User created successfully");
    } catch (error) { 
        res.status(500).json({msg: 'Internal server error', err: error.message});
    }
}

module.exports = postUser;