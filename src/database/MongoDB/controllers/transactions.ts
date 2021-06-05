import { response } from 'express';
import { User } from '../Models/userModel';

const transfer = async (req, res) => {
  const value = parseInt(req.body.value);
  const recipient = await User.findOne({ ip: req.body.recipientIP }).catch(
    err => {
      console.log(err);
      return res.status(403).json({
        menssage: 'Erro',
        Erro: err,
      });
    },
  );

  const sender = await User.findOne({ ip: req.body.senderIP }).catch(err => {
    console.log(err);
    return res.status(403).json({
      menssage: 'Erro',
      Erro: err,
    });
  });
  console.log();

  await User.findOneAndUpdate(
    { ip: req.body.recipientIP },
    { balance: recipient.balance + value },
  ).catch(err => {
    console.log(err);
    return res.status(403).json({
      menssage: 'Erro',
      Erro: err,
    });
  });

  await User.findOneAndUpdate(
    { ip: req.body.senderIP },
    { balance: sender.balance - value },
  ).catch(err => {
    console.log(err);
    return res.status(403).json({
      menssage: 'Erro',
      Erro: err,
    });
  });

  return res.status(201).json({
    sender: {
      ip: sender.ip,
      balance: sender.balance - req.body.value,
    },
    recipient: {
      ip: recipient.ip,
      balance: recipient.balance + req.body.value,
    },
  });
};

const getAllUsersAndMe = async (req, res) => {
  const allUsers = await User.find();

  const me = allUsers.filter(element => {
    return element.ip == req.body.ip;
  });
  const allUserWithOutMe = allUsers.filter(element => {
    return element.ip != req.body.ip;
  });

  return res.status(201).json({ me, allUserWithOutMe });
};

export { transfer, getAllUsersAndMe };
