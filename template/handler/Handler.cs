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

            return new CommandResult();
        }

        {{/command}}
    }
}
