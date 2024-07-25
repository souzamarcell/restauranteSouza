import express from "express";
// import http from "node:http";
import mongoose from "mongoose";
import path from "node:path";
// import { Server } from "socket.io";

import { router } from "./router";


mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    const app = express()
    const port = 3001

    app.use(
      '/uploads',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    )
    app.use(express.json())
    app.use(router)

    app.listen(3001, () => {
      console.log(`☢ MongoDB and Server is running on http://localhost:${port}`)
    })
  })
  .catch(() => console.log('Erro ao conectar MongoDB'))
