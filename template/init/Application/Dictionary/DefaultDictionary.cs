namespace Application.Dictionary
{
    public class DefaultDictionary
    {
        public IDictionary<string, string> Response { get; }

        public DefaultDictionary()
        {
            Response = new Dictionary<string, string>()
            {
                {"Success", "Request suceeded"},
                {"Failed", "Request failed"},
                {"InternalError", "Internal server error"},
                {"NotFound", "Resource not found"},
                {"Unauthorized", "Unauthorized access"},
                {"ValidationError", "Validation error"}
            };
        }
    }
}
