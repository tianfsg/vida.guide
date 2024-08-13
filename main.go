package main

import (
	"github.com/gin-gonic/gin"
	"github.com/vida.guide/routes"
)

func main() {
	router := gin.Default()

	// Serve static files
	router.Static("/static", "./static")

	// Load HTML templates
	router.LoadHTMLGlob("views/templates/*")

	// Setup routes
	routes.SetupRoutes(router)

	// Run server
	router.Run("localhost:8060")
}
