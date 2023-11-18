using Domain.Commands.Contracts;
using Domain.Validation;

namespace Domain.Commands 
{

    public class {{name}} : ValidatableTypes, ICommand
    {
        public {{name}}({{#id}}Guid id, {{/id}}{{structureConstructor}})
        {
            {{#id}}this.id = id;{{/id}}{{& structureEntityThis}}
        }{{#id}}

        public Guid id { get; set; }{{/id}}{{& structureEntityPublic}}

        public bool IsCommandValid()
        {
            {{#id}}ValidateGuidNotEmpty(id, "Id");
            
            {{/id}}return this.isValid;
        }
    }
}