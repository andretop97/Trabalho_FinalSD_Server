import { User } from '../Models/userModel';
import { Request, Response } from 'express';

const createUser = async (req, res) => {
  await User.create(req.body)
    .then(user => {
      return res.status(201).json({
        menssage: 'foi',
        user: user,
      });
    })
    .catch(err => {
      console.log(err);
      return res.status(403).json({
        menssage: 'Erro',
        Erro: err,
      });
    });
};

const isUser = async (req: Request, res: Response) => {
  User.findOne({ ip: req.body.ip })
    .then(response => {
      console.log(req.body);
      console.log(response);
      return response
        ? res.status(201).json(response)
        : res.status(201).json(null);
    })
    .catch(err => {
      console.log('erro', err);
    });
};

const login = async (req: Request, res: Response) => {
  User.findOne({ ip: req.body.ip })
    .then(response => {
      console.log(req.body);
      return response.password == req.body.password
        ? res.status(201).json({ isRegister: true })
        : res.status(201).json({ isRegister: false });
    })
    .catch(err => {
      console.log('erro', err);
    });
};

export { createUser, isUser, login };
