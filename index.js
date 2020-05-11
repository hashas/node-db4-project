const express = require("express")
const helmet = require("helmet")
// import router
const RecipesRouter = require("./recipes-router")

const server = express()
const port = process.env.PORT || 5000

server.use(helmet())
server.use(express.json())
// router
server.use("/api/recipes", RecipesRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong"
	})
})

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})