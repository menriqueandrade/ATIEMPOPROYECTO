using System.Collections.Generic;
using System.Threading.Tasks;
using ATiempo.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace ATiempo.Controllers
{
   [Route("api/[Controller]")]
   [ApiController]
  public class MensajerosController :ControllerBase
    {
        private readonly DataContext _context;

        public MensajerosController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Mensajeros>>> GetMensajeros()
        {
            return await _context.Mensajeros.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Mensajeros>> PostMensajeros(Mensajeros mensajero)
        {
            if (!ModelState.IsValid)
                return BadRequest("Esta mal");
            _context.Mensajeros.Add(mensajero);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetMensajero), new {id = mensajero.Id}, mensajero);
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<Mensajeros>> GetMensajero(int id)
        {
            var mensajero = await _context.Mensajeros.FindAsync(id);
            if (mensajero != null)
                return mensajero;
            return NotFound();
        }
    }
}
