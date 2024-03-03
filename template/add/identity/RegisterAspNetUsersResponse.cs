namespace Application.DTOs.Response
{
    public class RegisterAspNetUsersResponse
    {
        public bool Success { get; set; }
        public List<string> Errors { get; set; }

        public RegisterAspNetUsersResponse() =>
            Errors = new List<string>();

        public RegisterAspNetUsersResponse(bool success = true) : this() =>
            Success = success;

        public void AddErros(IEnumerable<string> erros) =>
            Errors.AddRange(erros);
        
    }
}
