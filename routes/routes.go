package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/vida.guide/controllers"
)

func SetupRoutes(router *gin.Engine) {
	router.GET("/", controllers.Home)
}
