using System.Collections.Generic;
using System.Threading.Tasks;
using ATiempo.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace ATiempo.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class VehiculosController : ControllerBase
    {
        private readonly DataContext _context;

        public VehiculosController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Vehiculos>>> GetVehiculos()
        {
            return await _context.Vehiculos.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Vehiculos>> PostClientes(Vehiculos vehiculo)
        {
            if (!ModelState.IsValid)
                return BadRequest("Esta mal");
            _context.Vehiculos.Add(vehiculo);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetVehiculo), new {id = vehiculo.Id}, vehiculo);
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<Vehiculos>> GetVehiculo(int id)
        {
            var vehiculo = await _context.Vehiculos.FindAsync(id);
            if (vehiculo != null)
                return vehiculo;
            return NotFound();
        }
    }
    }
