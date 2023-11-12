using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Validation
{
    public class Validatable
    {
        [NotMapped]
        public List<string> Errors { get; private set; } = new List<string>();
        [NotMapped]
        public bool isValid { get; private set; } = true;
        public void addError(string error) 
        { 
            this.isValid = false;
            Errors.Add(error); 
        }
        public void addErrors(List<string> errors)
        {
            this.isValid = false;
            this.Errors.AddRange(errors);
        }
    }
}
        