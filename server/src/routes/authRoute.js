import express, { Router } from "express"
import { checkAuth, loggout, login, signup, updateProfile } from "../controllers/authController.js"
import { protectRoute } from "../middleware/auth.middleware.js"

const authRouter=Router()

authRouter.post('/signup',signup)
authRouter.post('/login',login)
authRouter.get('/loggout',loggout)
authRouter.put("/update-profile", protectRoute, updateProfile);

authRouter.get("/check", protectRoute, checkAuth);

export default authRouter

