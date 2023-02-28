package main

import (
	"context"
	"fmt"
	"github.com/shirou/gopsutil/cpu"
	"os"
	"syscall"
	"time"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) ObtenerCPU() string {
	interval := time.Second * 1 // Intervalo de 1 segundo
	percent, err := cpu.Percent(interval, false)
	if err != nil {
		fmt.Println("Error al obtener el uso de la CPU:", err)
	}

	fmt.Printf("Uso de CPU: %.2f%%\n", percent[0])
	return fmt.Sprintf("%f", percent[0])
}

// Greet returns a greeting for the given name
func (a *App) ObtenerDisco() string {
	var stat syscall.Statfs_t
	wd, err := os.Getwd()
	if err != nil {
		panic(err)
	}
	syscall.Statfs(wd, &stat)

	// Calcula el espacio total y el espacio utilizado
	total := stat.Blocks * uint64(stat.Bsize)
	free := stat.Bfree * uint64(stat.Bsize)
	used := total - free

	// Calcula el porcentaje de uso
	usedPercent := float64(used) / float64(total) * 100

	fmt.Printf("Espacio utilizado: %d bytes\n", used)
	fmt.Printf("Espacio total: %d bytes\n", total)
	fmt.Printf("Porcentaje de uso: %.2f%%\n", usedPercent)

	return fmt.Sprintf("%f", usedPercent)
}
func (a *App) ObtenerTotalDisco() string {
	var stat syscall.Statfs_t
	wd, err := os.Getwd()
	if err != nil {
		panic(err)
	}
	syscall.Statfs(wd, &stat)

	// Tamaño del bloque en bytes
	blockSize := stat.Bsize

	// Tamaño total del disco en bytes
	total := stat.Blocks * uint64(blockSize)

	// Espacio libre en bytes
	free := stat.Bfree * uint64(blockSize)

	// Espacio usado en bytes


	// Tamaño en MB
	mb := float64(1024 * 1024)

	// Espacio disponible en MB
	freeMB := float64(free) / mb
	// Espacio usado en bytes
	used := (stat.Blocks - stat.Bfree) * uint64(blockSize)
	// Tamaño total en MB
	totalMB := float64(total) / mb

	// Porcentaje de uso del disco
	percentage := float64(used) / float64(total) * 100

	fmt.Printf("Espacio LIBRE: %.2f MB\n", freeMB)
	fmt.Printf("Espacio total: %.2f MB\n", totalMB)
	fmt.Printf("Porcentaje de uso: %.2f%%\n", percentage)

	return fmt.Sprintf("%f", totalMB)
}
func (a *App) ObtenerDiscoUSO() string {
	var stat syscall.Statfs_t
	wd, err := os.Getwd()
	if err != nil {
		panic(err)
	}
	syscall.Statfs(wd, &stat)

	// Tamaño del bloque en bytes
	blockSize := stat.Bsize

	// Tamaño total del disco en bytes
	total := stat.Blocks * uint64(blockSize)

	// Espacio libre en bytes


	// Espacio usado en bytes
	used := (stat.Blocks - stat.Bfree) * uint64(blockSize)

	// Tamaño en MB
	mb := float64(1024 * 1024)

	
	// Tamaño total en MB
	totalMB := float64(total) / mb

	// Espacio usado en MB
	usedMB := float64(used) / mb

	// Porcentaje de uso del disco
	percentage := float64(used) / float64(total) * 100

	fmt.Printf("Espacio USADO: %.2f MB\n", usedMB)
	fmt.Printf("Espacio total: %.2f MB\n", totalMB)
	fmt.Printf("Porcentaje de uso: %.2f%%\n", percentage)

	return fmt.Sprintf("%f", usedMB)
}
func (a *App) ObtenerDiscoLibre() string {
	var stat syscall.Statfs_t
	wd, err := os.Getwd()
	if err != nil {
		panic(err)
	}
	syscall.Statfs(wd, &stat)

	// Tamaño del bloque en bytes
	blockSize := stat.Bsize

	// Tamaño total del disco en bytes
	total := stat.Blocks * uint64(blockSize)

	// Espacio libre en bytes


	// Espacio libre en bytes
	free := stat.Bfree * uint64(blockSize)
	// Espacio usado en bytes
	used := (stat.Blocks - stat.Bfree) * uint64(blockSize)

	// Tamaño en MB
	mb := float64(1024 * 1024)
// Espacio disponible en MB
freeMB := float64(free) / mb
	
	// Tamaño total en MB
	totalMB := float64(total) / mb

	// Espacio usado en MB
	usedMB := float64(used) / mb

	// Porcentaje de uso del disco
	percentage := float64(used) / float64(total) * 100

	fmt.Printf("Espacio USADO: %.2f MB\n", usedMB)
	fmt.Printf("Espacio total: %.2f MB\n", totalMB)
	fmt.Printf("Porcentaje de uso: %.2f%%\n", percentage)

	return fmt.Sprintf("%f", freeMB)
}
