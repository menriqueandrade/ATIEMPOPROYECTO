using System.Collections.Generic;
using System.Threading.Tasks;
using ATiempo.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace ATiempo.Controllers
{

    [Route("api/[Controller]")]
    [ApiController]
    public class UtilidadesController : ControllerBase
    {
        private readonly DataContext _context;

        public UtilidadesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Utilidades>>> GetUtilidades()
        {
            return await _context.Utilidades.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Utilidades>> PostUtilidades(Utilidades utilidad)
        {
            if (!ModelState.IsValid)
                return BadRequest("Esta mal");
            _context.Utilidades.Add(utilidad);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetUtilidad), new {id = utilidad.Id}, utilidad);
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<Utilidades>> GetUtilidad(int id)
        {
            var utilidad = await _context.Utilidades.FindAsync(id);
            if (utilidad != null)
                return utilidad;
            return NotFound();
        }
    }
}