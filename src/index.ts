import Server from "./routes/Server";
import ServerExpress from "./routes/Server/ServerExpress";

const port = parseInt(process.env.SERVER_PORT ?? "") || 8080;
const app: Server = new ServerExpress(port);

app.listen(() => console.log("Listen on " + port));
