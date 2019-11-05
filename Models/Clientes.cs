namespace ATiempo.Models
{
    public class Clientes : BaseModel
    {
        public string Cedula { get; set; }
        public string Nombre { get; set; }
        public string Direccion { get; set; }
    }
}