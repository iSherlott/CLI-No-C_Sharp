using Domain.Commands;
using Domain.Commands.Contracts;
using Domain.Handlers.Contracts;
using Domain.Repositories;
using System.Net;

namespace Domain.Handlers
{
    public class {{title}}Handler : {{#command}}{{#isFirst}}{{else}}, {{/isFirst}}IHandler<{{commandName}}>{{/command}}
    {
        {{#repository}}
        public readonly I{{title}}Repository _{{name}}Repository;
        public {{title}}Handler(I{{title}}Repository {{name}}Repository)
        {
            _{{name}}Repository = {{name}}Repository;
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
