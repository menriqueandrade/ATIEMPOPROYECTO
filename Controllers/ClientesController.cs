using System.Collections.Generic;
using System.Threading.Tasks;
using ATiempo.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ATiempo.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class ClientesController : ControllerBase
    {
        private readonly DataContext _context;

        public ClientesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Clientes>>> GetClientes()
        {
            return await _context.Clientes.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Clientes>> PostClientes(Clientes cliente)
        {
            if (!ModelState.IsValid)
                return BadRequest("Esta mal");
            _context.Clientes.Add(cliente);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetCliente), new {id = cliente.Id}, cliente);
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<Clientes>> GetCliente(int id)
        {
            var cliente = await _context.Clientes.FindAsync(id);
            if (cliente != null)
                return cliente;
            return NotFound();
        }
    }
}