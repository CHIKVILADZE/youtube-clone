import express from 'express';
import { deleteUser, dislike, getUser, like, subscribeUSer, unsubscribeUser, updateUser } from '../controllers/user.js'
import { verifyToken } from '../verifyToken.js';

const router = express.Router();


// update user
router.put('/:id', verifyToken, updateUser)

// delete user
router.put('/:id', deleteUser)


// get a user
router.put('/find/:id', getUser)


//subscribe a user 
router.put('/sub/:id', subscribeUSer)


// unsubscribe a user
router.put('/unsub/:id', unsubscribeUser)


// like a video
router.put('/like/:videoId', like)


// dislike a video
router.put('/dislike/:videoId', dislike)


export default router;