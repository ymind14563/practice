const express = require(`express`);
const controller = require(`../controller/Cuser`);
const router = express.Router();

// GET /user
router.get(`/user`, controller.getMain);

// GET /user/signup
router.get(`/user/signup`, controller.getSignUp);

// GET /user/signin
router.get(`/user/signin`, controller.getSignIn);



// POST /user/signup
router.post(`/user/signup`, controller.postSignUp);

// POST /user/signin
router.post(`/user/signin`, controller.postSignIn);

// POST /user/profile
router.post(`/user/profile`, controller.postProfile);



// PATCH /user/profile/edit
router.patch(`/user/profile/edit`, controller.patchProfile);

// DELETE /user/profile/delete
router.delete(`/user/profile/delete`, controller.deleteProfile);



module.exports = router;