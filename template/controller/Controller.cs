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
            var models = await _{{name}}Repository.GetByIdAsync(id);
            if (models == null) return NotFound("Entity not found"); 

            return Ok(new CommandResult(models));
        }

        [HttpPost]
        public async Task<IActionResult> Create{{title}}Async([FromBody] Create{{title}}Command command, [FromServices] {{title}}Handler handler)
        {
            var handle = await handler.Handle(command);

            return Ok(handle);
        }

        [HttpPut]
        public async Task<IActionResult> Update{{title}}Async([FromBody] Update{{title}}Command command, [FromServices] {{title}}Handler handler)
        {
            var handle = await handler.Handle(command);

            return Ok(handle);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteByIdAsync(Guid id)
        {
            var entity = await _{{name}}Repository.GetByIdAsync(id);
            if (entity == null) return NotFound("Entity not found"); 
                
            _{{name}}Repository.DeleteObject(entity);

            var result = new { data = "Removed success!!!" };

            return Ok(new CommandResult(result));
        }
    }
}