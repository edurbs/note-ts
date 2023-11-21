import { Request, Response } from "express";

const db = [
  {
    name: "Joana",
    email: "joana@dio.com",
  },
];

export class UserController {
  createUser = (request: Request, response: Response) => {
    const user = request.body;
    db.push(user);
    console.log(db)
    return response.status(201).json({ message: "User created" });
  };
}
