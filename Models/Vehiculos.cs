namespace ATiempo.Models
{
    public class Vehiculos : BaseModel
    {
        public string Placa { get; set; }
        public string Color { get; set; }
        public string Modelo { get; set; }
        public int MensajeroId { get; set; }
        public string Soat { get; set; }
        public string Tecnomecanica { get; set; }

        public Mensajeros Mensajero { get; set; }
    }
}