using Domain.Validation;

namespace Domain.Entities
{
    public class BaseEntity : Validatable
    {
        public Guid ID { get; set; }
        public DateTimeOffset Created { get; private set; }
        public DateTimeOffset? Update { get; private set; }
        public BaseEntity()
        {
            Created = DateTime.UtcNow;
            Update = null; 
        }

        public void setCreated(DateTimeOffset Created) { this.Created = Created; }
        public void setUpdate(DateTimeOffset Update) {  this.Update = Update; }


    }
}
        