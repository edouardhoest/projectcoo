import Server from "./routes/Server";
import ExpressServer from "./routes/Server/ExpressServer";

const app: Server = new ExpressServer(parseInt(process.env.SERVER_PORT ?? "") ?? 8080);

app.listen(() => console.log("All good !"));
