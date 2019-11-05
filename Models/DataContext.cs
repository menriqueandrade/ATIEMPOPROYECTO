using Microsoft.EntityFrameworkCore;
using ATiempo.Models;

namespace ATiempo.Models
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        
        public DbSet<Clientes> Clientes { get; set; }
        public DbSet<Mensajeros> Mensajeros { get; set; }
        public DbSet<Servicios> Servicios { get; set; }
        public DbSet<Tarifas> Tarifas { get; set; }
        public DbSet<Utilidades> Utilidades { get; set; }
        public DbSet<Vehiculos> Vehiculos { get; set; }
        public DbSet<ATiempo.Models.Tarifa> Tarifa { get; set; }
    }
}