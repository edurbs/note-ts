import express, { Request, Response } from "express";

const server = express();

server.use(express.json());

server.get('/', (request: Request, respose: Response) => {
  return respose.status(200).json({message: 'DioBank API'})
});

server.post('/user', (request: Request, respose: Response) => {
  const body = request.body;
  return respose.status(201).json({message: 'User created'})
})

server.listen(5000, () => console.log("server is running on port 5000"));

