import { servicesMessage } from "./modules/messages/services";
import { IMessage, message } from "./modules/messages/model";
import dbConnect from "./helper/configMongo";
import { resHttpIO } from "./helper";
import { createServer } from "http";
import routes from "./routes";
import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = 3000;

const server = createServer(app);

app.use(express.json());
app.use(cors());

app.use(routes);
console.clear();

server.listen(PORT, () => console.log("✅ Servidor listo por el puesto ->", PORT));

export const io = require("socket.io")(server, {
  cors: {
    methods: ["GET", "POST", "PUT"],
  },
});

io.on("connection", (socket: any) => {
  socket.on("allMessages", async (idChat: string) => {
    const data = await servicesMessage.searchMessagesByChat(idChat);

    io.emit("allMessagesChat", resHttpIO({ data }));
  });

  socket.on("saveMessage", async (message: IMessage) => {
    await servicesMessage.registerMessage(message);
  });
});

dbConnect();
