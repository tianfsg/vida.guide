// controllers/home_controller.go
package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Home(c *gin.Context) {
	c.HTML(http.StatusOK, "index.html", gin.H{
		"title":    "vida.guide",
		"name":     "Sebastián Fco. Gutiérrez Rojas",
		"summary":  "Ingeniero de Software especializado en Big Data y Deep Learning.",
		"github":   "https://github.com/tianfsg",
		"linkedin": "https://www.linkedin.com/in/seguro/",
	})
}
