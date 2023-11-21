import express, { Request, Response } from "express";
import { UserController } from "./controllers/UserController";

const userController = new UserController()


const server = express();

server.use(express.json());

server.get('/', (request: Request, respose: Response) => {
  return respose.status(200).json({message: 'DioBank API'})
});

server.post('/user', userController.createUser );
server.get('/users', userController.getAllUsers);

server.listen(5000, () => console.log("server is running on port 5000"));

