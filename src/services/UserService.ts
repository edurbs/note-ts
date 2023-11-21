export interface User {
  name: string;
  email: string;
}

let db = [
  {
    name: "Joana",
    email: "joana@dio.com",
  },
];


export class UserService {

  db: User[];

  constructor(database = db ) {
    this.db = database;
  }

  deleteUser(email: string) {
    this.db = this.db.filter((user) => user.email !== email);
    console.log('DB atualizado', this.db);
  }
  createUser = (name: string, email: string) => {
    const user = { name, email };
    this.db.push(user);
    console.log('DB atualizado', this.db);
  };

  getAllUsers = () => {
    return this.db;
  }
}
