using Domain.Validation;

namespace Domain.Entities
{
    public class BaseEntity : Validatable
    {
        public Guid id { get; set; }
        public DateTimeOffset created { get; private set; }
        public DateTimeOffset? update { get; private set; }
        public BaseEntity()
        {
            created = DateTime.UtcNow;
            update = null; 
        }

        public void setCreated(DateTimeOffset created) { this.created = created; }
        public void setUpdate(DateTimeOffset update) {  this.update = update; }


    }
}
        