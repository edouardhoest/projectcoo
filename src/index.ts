import express from "express"
import Server from './routes/server'

const app = express();
new Server(app)

app.listen(8080, () => console.log("All good !"))
