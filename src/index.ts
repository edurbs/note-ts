import express, { Request, Response } from "express";
import { UserController } from "./controllers/UserController";
import { router } from "./routes";

const userController = new UserController()


const server = express();

server.use(express.json());
server.use(router)

server.get('/', (request: Request, respose: Response) => {
  return respose.status(200).json({message: 'DioBank API'})
});


server.listen(5000, () => console.log("server is running on port 5000"));

