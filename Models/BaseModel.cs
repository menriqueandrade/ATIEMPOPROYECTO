using System;
using System.ComponentModel.DataAnnotations;

namespace ATiempo.Models
{
    public class BaseModel
    {
        [Key]
        public int Id { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime ModifiedAt { get; set; }

        public BaseModel()
        {
            CreatedAt = DateTime.Now;
            ModifiedAt = DateTime.Now;
        }
    }
}