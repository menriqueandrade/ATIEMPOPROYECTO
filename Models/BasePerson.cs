namespace ATiempo.Models
{
    public class BasePerson : BaseModel
    {
        public string Cedula { get; set; }
        public string Nombre { get; set; }
        public string Direccion { get; set; }
    }
}