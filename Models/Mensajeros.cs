using System;

namespace ATiempo.Models
{
    public class Mensajeros : BasePerson
    {
   
        public int Edad { get; set; }
        public string Telefono { get; set; }
        public DateTime FechaIngreso { get; set; }
        public bool Estado { get; set; }
        
        public Vehiculos Vehiculos { get; set; }
    }
}