const UserRepository = require("../repositories/user.repository");
const db = require("../models");

class UserServices {
  async getAllUsers() {
    return await UserRepository.findAll();
  }

  async getUserById(id) {
    return await UserRepository.findById(id);
  }

  async createUser(data) {
    return await UserRepository.create(data);
  }

  async updateUser(id, data) {
    return await UserRepository.update(id, data);
  }

  async deleteUser(id) {
    return await UserRepository.delete(id);
  }
}

module.exports = new UserServices();
