import ExpressServer from './routes/Server/ExpressServer'
import Server from './routes/Server'

const app: Server = new ExpressServer(8080)

app.listen(() => console.log("All good !"))
