using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ATiempo.Models
{
    public class Tarifa
    {

        [Key]
        public double id_tarifa { get; set; }
        
        public DateTime fecha_tarifa { get; set; }
        public double cantidad_tarifa { get; set; }
    }
}
