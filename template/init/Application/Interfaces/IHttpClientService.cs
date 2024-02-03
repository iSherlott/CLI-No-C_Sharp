using System.Net.Http;
using System.Threading.Tasks;

namespace Application.Interfaces
{
    public interface IHttpClientService
    {
        Task<T> SendRequestAsync<T>(string url, HttpMethod method);
    }
}
