using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    {{{database}}}
    public class {{name}} : BaseEntity
    {
        public {{name}}(string name)
        {
            {{& structureEntityThis}}
        }
        {{& structureEntityPublic}}
    }

}