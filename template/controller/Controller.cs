using System.Net;
using Domain.Commands;
using Domain.Entities;
using Domain.Handlers;
using Domain.Repositories;
using Application.Dictionary;
using API.Controllers.Contract;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class {{name}}Controller : BaseController
    {
        private readonly I{{name}}Repository _{{title}}Repository;
        public {{name}}Controller(I{{name}}Repository {{title}}Repository, DefaultDictionary defaultDictionary) : base(defaultDictionary)
        {
            _{{title}}Repository = {{title}}Repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync()
        {
            var models = await _{{title}}Repository.GetAllAsync();

            return Ok(new CommandResult(models, HttpStatusCode.OK));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetByIdAsync(Guid id)
        {
            var models = await _{{title}}Repository.GetByIdAsync(id);
            if (models == null) return NotFound(_defaultDictionary.Response["NotFound"]); 

            return Ok(new CommandResult(models, HttpStatusCode.OK));
        }
        {{#command}}

        {{^isUpdateCommand}}
        [HttpPost]
        public async Task<IActionResult> Create{{name}}Async([FromBody] Create{{name}}Command command, [FromServices] {{name}}Handler handler)
        {
            var handle = await handler.Handle(command);

            return Ok(handle);
        }
        {{/isUpdateCommand}}
        {{#isUpdateCommand}}
        [HttpPut]
        public async Task<IActionResult> Update{{name}}Async([FromBody] Update{{name}}Command command, [FromServices] {{name}}Handler handler)
        {
            var handle = await handler.Handle(command);

            return Ok(handle);
        }
        {{/isUpdateCommand}}
        {{/command}}
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteByIdAsync(Guid id)
        {
            var entity = await _{{title}}Repository.GetByIdAsync(id);
            if (entity == null) return NotFound(_defaultDictionary.Response["NotFound"]); 
                
            _{{title}}Repository.DeleteObject(entity);

            var result = new { data = "Removed success!!!" };

            return Ok(new CommandResult(result, HttpStatusCode.NoContent));
        }
    }
}