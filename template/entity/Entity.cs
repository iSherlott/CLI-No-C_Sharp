{{#database}}
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

{{/database}}
namespace Domain.Entities
{
    {{{database}}}
    public class {{name}} {{#baseSkip}}: BaseEntity {{/baseSkip}}
    {
        public {{name}}() { }
        
        public {{name}}({{structureConstructor}})
        {
            {{& structureEntityThis}}
        }
        {{& structureEntityPublic}}
    }

}