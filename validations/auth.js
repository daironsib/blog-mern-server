import { body } from 'express-validator'

export const registerValidation = [
  body('email', 'Invalid email format').isEmail(),
  body('password', 'The password must be at least 5 characters long').isLength({ min: 5 }),
  body('fullName', 'Name is required').isLength({ min: 3 }),
  body('avatarUrl', 'Invalid link to avatar').optional().isURL(),
]