using Domain.Commands;
using Domain.Commands.Contracts;
using Domain.Entities;
using Domain.Handlers.Contracts;
using Domain.Helpers;
using Domain.Repositories;
using System.Net;

namespace Domain.Handlers
{
    public class {{title}}Handler : {{#command}}{{#isFirst}}{{else}}, {{/isFirst}}IHandler<{{commandName}}>{{/command}}
    {
        {{#repository}}
        private readonly I{{title}}Repository _{{name}}Repository;
        private readonly IMapper _mapper;
        public {{title}}Handler(I{{title}}Repository {{name}}Repository, IMapper mapper)
        {
            _{{name}}Repository = {{name}}Repository;
            _mapper = mapper;
        }
        {{/repository}}

        {{#command}}
        public async Task<ICommandResult> Handle({{commandName}} command)
        {
            command.IsCommandValid();

            if (!command.isValid)
            {
                return new CommandResult(command.Errors, HttpStatusCode.BadRequest);
            }

            {{#isUpdateCommand}}

            {{title}}Entity entity = await _{{name}}Repository.GetByIdAsync(command.id);

            if (entity == null) return new CommandResult("Entity not found", HttpStatusCode.NotFound);

            _mapper.Map(command, entity);

            await _{{name}}Repository.UpdateAsync(entity);

            var result = new { data = "Update success!!!" };
            
            {{/isUpdateCommand}}

            return new CommandResult();
        }

        {{/command}}
    }
}
