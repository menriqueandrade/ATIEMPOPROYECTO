using System;

namespace ATiempo.Models
{
    public class Tarifas : BaseModel
    {
        public DateTime Fecha { get; set; }
        public double Cantidad { get; set; }
    }
}