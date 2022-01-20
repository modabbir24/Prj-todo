import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import todoRoutes from "./routes"
import bodyParser from "body-parser"

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(todoRoutes)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

const uri: string = "mongodb+srv://modabbir24:citymall@cluster0.wixkq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const options = { useNewUrlParser: true, useUnifiedTopology: true }
//mongoose.set("useFindAndModify", false)

mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })