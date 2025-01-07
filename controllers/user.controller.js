const UserProvider = require("../services/user.services");
const {
    createUserSchema,
    updateUserSchema,
} = require("../validators/user.validator");

class UserController {
    async getAll(req, res) {
        try {
            const users = await UserProvider.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    async getOne(req, res) {
        try {
            const user = await UserProvider.getUserById(req.params.id);
            if (!user) return res.status(404).json({message: "User not found"});
            res.json(user);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    async create(req, res) {
        try {
            const {error} = createUserSchema.validate(req.body);
            if (error) return res.status(400).json({error: error.details[0].message});
            const user = await UserProvider.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    async update(req, res) {
        try {
            const {error} = updateUserSchema.validate(req.body);
            if (error) return res.status(400).json({error: error.details[0].message});

            const user = await UserProvider.updateUser(req.params.id, req.body);
            if (!user) return res.status(404).json({message: "User not found"});
            res.json(user);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    async delete(req, res) {
        try {
            const user = await UserProvider.deleteUser(req.params.id);
            if (!user) return res.status(404).json({message: "User not found"});
            res.json({message: "User deleted successfully"});
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
}

module.exports = new UserController();
