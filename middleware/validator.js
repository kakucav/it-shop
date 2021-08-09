import { check, validationResult } from 'express-validator';

const registerValidator = [
  check('username').not().isEmpty().trim().withMessage('Sva polja moraju biti popunjena!'),
  check('email').isEmail().normalizeEmail().withMessage('Email adresa nije validna!'),
  check('password').isLength({ min: 6 }).withMessage('Lozinka mora sadržati najmanje 6 karaktera!'),
];

const loginValidator = [
  check('username').not().isEmpty().trim().withMessage('Sva polja moraju biti popunjena!'),
  check('password').isLength({ min: 6 }).withMessage('Lozinka mora sadržati najmanje 6 karaktera!'),
];

const validatorResult = (req, res, next) => {
  const result = validationResult(req);
  const hasErrors = !result.isEmpty();

  if (hasErrors) {
    const firstError = result.array()[0].msg;
    return res.status(400).json({ errorMessage: firstError });
  }

  next();
};

export { registerValidator, loginValidator, validatorResult };
