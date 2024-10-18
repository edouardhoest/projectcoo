import ExpressServer from './routes/Server/serverExpress'
import Server from './routes/server'

const app: Server = new ExpressServer(8080)

app.listen(() => console.log("All good !"))
