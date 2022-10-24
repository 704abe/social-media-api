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
router.route('/api/users').get(getUsers).post(createUser);


// /api/users/userId
router.route('/api/users/:userId').get(getOneUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends
router.route('/api/users/:userId/friends/').post(addFriend);

// /api/users/:userId/friends/:friendId
router.route('/api/users/:userId/friends/:friendId').delete(removeFriend);

// // /thoughts
// router.route('/thoughts').get(getThoughts).post(createThought);

// // /thoughts/thoughtId
// router.route('/thoughts/:id').get(getOneThought).put(updateThought).delete(deleteThought);

// // /reactions
// router.route('/thoughts/:thoughtId').post(addReaction);


// // /reactions/reactionId
// router.route('/thoughts/:thoughtId/reactions/:reactionId').delete(deleteReaction);


module.exports = router