let db = [
  {
    name: "Joana",
    email: "joana@dio.com",
  },
];


export class UserService {
  deleteUser(email: string) {
    db = db.filter((user) => user.email !== email);
    console.log('DB atualizado', db);
  }
  createUser = (name: string, email: string) => {
    const user = { name, email };
    db.push(user);
    console.log('DB atualizado', db);
  };

  getAllUsers = () => {
    return db;
  }
}
