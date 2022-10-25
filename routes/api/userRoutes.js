const express = require('express');
const router  = express.Router()
const {
    getUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
  } = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/userId
router.route('/:userId').get(getOneUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends
router.route('/:userId/friends/').post(addFriend);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router