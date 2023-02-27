package main

import (
	"context"
	"fmt"
	"github.com/shirou/gopsutil/cpu"
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
	dir := "/" // Cambia esto a la ruta de la partición que quieres monitorear
	syscall.Statfs(dir, &stat)

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
