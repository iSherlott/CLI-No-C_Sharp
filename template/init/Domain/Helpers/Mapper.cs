namespace Domain.Helpers
{
    public interface IMapper
    {
        void Map<Source, Destination>(Source source, Destination destination);
    }

    public class Mapper : IMapper
    {
        public void Map<Source, Destination>(Source source, Destination destination)
        {
            var sourceType = typeof(Source);
            var destinationType = typeof(Destination);

            var allowedProperties = GetAllowedProperties(source);

            foreach (var propertyName in allowedProperties)
            {
                var sourceProperty = sourceType.GetProperty(propertyName);
                var destinationProperty = destinationType.GetProperty(propertyName);

                if (sourceProperty != null && destinationProperty != null)
                {
                    var sourceValue = sourceProperty.GetValue(source);
                    destinationProperty.SetValue(destination, sourceValue);
                }
            }
        }

        private string[] GetAllowedProperties<T>(T source)
        {
            var sourceType = typeof(T);
            var sourceProperties = sourceType.GetProperties();

            var allowedProperties = sourceProperties
                .Where(property =>
                {
                    var value = property.GetValue(source);
                    return value != null && property.Name != "Errors" && property.Name != "Id" && property.Name != "isValid";
                })
                .Select(property => property.Name)
                .ToArray();

            return allowedProperties;
        }
    }
}
