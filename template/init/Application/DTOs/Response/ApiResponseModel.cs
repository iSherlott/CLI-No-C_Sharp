using System.Net;

namespace Application.DTOs.Response
{
    public class ApiResponseModel<T>
    {
        public T Data { get; set; }
        public string Message { get; set; }
        public HttpStatusCode Status { get; set; }
    }
}
