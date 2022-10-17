import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"

import { userRouter } from './router/userRouter'
import { stockRouter } from './router/stockRouter'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3006, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3006}`)
})

app.use("/stock", stockRouter)
app.use("/user", userRouter)


