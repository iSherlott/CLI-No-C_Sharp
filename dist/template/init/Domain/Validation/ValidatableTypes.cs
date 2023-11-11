namespace Domain.Validation
{
    public class ValidatableTypes : Validatable
    {
        protected void ValidateStringNotEmpty(string value, string fieldName)
        {
            if (string.IsNullOrWhiteSpace(value))
            {
                addError($"{fieldName} cannot be empty");
            }
        }

        protected void ValidateGuidNotEmpty(Guid value, string fieldName)
        {
            if (value == Guid.Empty)
            {
                addError($"{fieldName} cannot be empty");
            }
        }

        protected void ValidateIntGreaterThanZero(int value, string fieldName)
        {
            if (value <= 0)
            {
                addError($"{fieldName} should be greater than zero");
            }
        }

        protected void ValidateDecimalGreaterThanZero(decimal value, string fieldName)
        {
            if (value <= 0)
            {
                addError($"{fieldName} should be greater than zero");
            }
        }

        protected void ValidateDateTimeNotDefault(DateTime value, string fieldName)
        {
            if (value == default(DateTime))
            {
                addError($"{fieldName} cannot be the default DateTime value");
            }
        }
    }
}
        