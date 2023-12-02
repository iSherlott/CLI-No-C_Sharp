using Domain.Commands;
using Domain.Entities;
using Domain.Handlers;
using Domain.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class {{title}}Controller : ControllerBase
    {
        private readonly I{{title}}Repository _{{name}}Repository;
        public {{title}}Controller(I{{title}}Repository {{name}}Repository)
        {
            _{{name}}Repository = {{name}}Repository;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetByIdAsync(Guid id)
        {
            try
            {
                var models = await _{{name}}Repository.GetByIdAsync(id);
                if (models == null) return NotFound("Entity not found"); 

                return Ok(new CommandResult(models));
            }
            catch (Exception ex)
            {
                return BadRequest($"Error getting company profile: {ex.Message}");
            }
            
        }

        [HttpPost()]
        public async Task<IActionResult> Create{{title}}Async([FromBody] Create{{title}}Command command, [FromServices] {{title}}Handler handler)
        {
            try
            {
                var handle = await handler.Handle(command);

                return Ok(handle);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error getting company profile: {ex.Message}");
            }
        }

        [HttpPut()]
        public async Task<IActionResult> Update{{title}}Async([FromBody] Update{{title}}Command command, [FromServices] {{title}}Handler handler)
        {
            try
            {
                var handle = await handler.Handle(command);

                return Ok(handle);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error getting company profile: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteByIdAsync(Guid id)
        {
            try
            {
                var entity = await _{{name}}Repository.GetByIdAsync(id);
                if (entity == null) return NotFound("Entity not found"); 
                
                _{{name}}Repository.DeleteObject(entity);

                var result = new { data = "Removed success!!!" };

                return Ok(new CommandResult(result));
            }
            catch (Exception ex)
            {
                return BadRequest($"Error getting company profile: {ex.Message}");
            }
        }
    }
}