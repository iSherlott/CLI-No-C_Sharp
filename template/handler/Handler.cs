using Domain.Commands;
using Domain.Commands.Contracts;
using Domain.Handlers.Contracts;
using Domain.Repositories;
using System.Net;

namespace Domain.Handlers
{
    public class {{name}}Handler : {{#command}}{{#isFirst}}{{else}}, {{/isFirst}}IHandler<{{commandName}}>{{/command}}
    {
        {{#repository}}
        public readonly I{{name}}Repository _{{name.toLower()}}Repository;
        public {{name}}Handler(I{{name}}Repository {{name.toLower()}}Repository)
        {
            _{{name.toLower()}}Repository = {{name.toLower()}}Repository;
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
