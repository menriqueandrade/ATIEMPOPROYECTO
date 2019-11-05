using System.Collections.Generic;
using System.Threading.Tasks;
using ATiempo.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

    [Route("api/[Controller]")]
    [ApiController]
    public class ServiciosController : ControllerBase
    {
        private readonly DataContext _context;

        public ServiciosController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Servicios>>> GetServicios()
        {
            return await _context.Servicios.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Servicios>> PostClientes(Servicios servicio)
        {
            if (!ModelState.IsValid)
                return BadRequest("Esta mal");
            _context.Servicios.Add(servicio);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetServicio), new {id = servicio.Id}, servicio);
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<Servicios>> GetServicio(int id)
        {
            var servicio = await _context.Servicios.FindAsync(id);
            if (servicio != null)
                return servicio;
            return NotFound();
        }
    }
    
