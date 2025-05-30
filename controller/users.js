let users = [
  {
    id: 1,
    name: 'Wahyu',
    email: 'wahyu@example.com',
  },
  {
    id: 2,
    name: 'Nugraha',
    email: 'nugraha@example.com',
  },
];

const getAllUsers = (req, res) => {
  res.json(users);
};

const createUsers = (req, res) => {
 try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: 'Nama dan email wajib diisi' });
    }
    if (email.includes('error')) {
      throw new Error('Email mengandung kata terlarang!');
    }
    const newUser = { id: Date.now(), name, email };
    users.push(newUser);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};

const updateUsers = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const userIndex = users.findIndex((user) => user.id === Number(id));
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], name, email };
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ message: 'User tidak ditemukan' });
  }
};

const deleteUsers = (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex((user) => user.id === Number(id));
  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1);
    res.json(deletedUser[0]);
  } else {
    res.status(404).json({ message: 'User tidak ditemukan' });
  }
};

module.exports = {
  getAllUsers,
  createUsers,
  updateUsers,
  deleteUsers,
};
