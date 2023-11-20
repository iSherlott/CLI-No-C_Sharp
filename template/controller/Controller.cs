using Domain.Commands;
using Domain.Entities;
using Domain.Handlers;
using Domain.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DiscordController : ControllerBase
    {
        private readonly IDiscordRepository _{{name.toLower()}}Repository;
        public DiscordController(IDiscordRepository {{name.toLower()}}Repository)
        {
            _{{name.toLower()}}Repository = {{name.toLower()}}Repository;
        }

        [HttpGet()]
        public async Task<IActionResult> GetByIdAsync(Guid id)
        {
            var models = await _discordRepository.GetByIdAsync(id);

            return Ok(new CommandResult(models));
        }

        [HttpPost()]
        public async Task<IActionResult> CreateDiscordAsync([FromBody] CreateDiscordCommand command, [FromServices] DiscordHandler handler)
        {
            var handle = await handler.Handle(command);

            return Ok(handle);
        }

        [HttpPut()]
        public async Task<IActionResult> UpdateDiscordAsync([FromBody] UpdateDiscordCommand command, [FromServices] DiscordHandler handler)
        {
            var handle = await handler.Handle(command);

            return Ok(handle);
        }

        [HttpDelete()]
        public async Task<IActionResult> DeleteByIdAsync(Guid id)
        {
            var entity = await _discordRepository.GetByIdAsync(id);
            if (entity == null) return NotFound("entity not found"); 
            
            _discordRepository.DeleteObject(entity);

            return Ok();
        }
    }
}