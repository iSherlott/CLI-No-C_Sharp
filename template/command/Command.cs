using Domain.Commands.Contracts;
using Domain.Validation;

namespace Domain.Commands 
{

    public class {{name}} : ValidatableTypes, ICommand
    {
        public {{name}}({{#id}}Guid id, {{/id}}{{structureConstructor}})
        {
            {{#id}}this.Id = id;{{/id}}{{& structureEntityThis}}
        }{{#id}}

        public Guid Id { get; set; }{{/id}}{{& structureEntityPublic}}

        public bool IsCommandValid()
        {
            {{#id}}ValidateGuidNotEmpty(Id, "Id");
            
            {{/id}}return this.isValid;
        }
    }
}