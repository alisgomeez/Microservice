import { Router } from 'express';
import * as signupController from '../controllers/signup.controller.js';
import * as signinController from '../controllers/signin.controller.js';

const router = Router();

router.get("/signup", signupController.showSignupForm);
router.post("/signup", signupController.signup);
router.get("/signin", signinController.showSigninForm);
router.post("/signin", signinController.signin); 

export default router;
