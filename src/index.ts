import Server from "./routes/Server";
import ServerExpress from "./routes/Server/ServerExpress";

const app: Server = new ServerExpress(parseInt(process.env.SERVER_PORT ?? "") || 8080);

app.listen(() => console.log("All good !"));
