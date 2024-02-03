using Newtonsoft.Json;
using System.Net;
using Application.Interfaces;

namespace Domain.Services
{
    public class HttpClientService : IHttpClientService
    {
        public async Task<T> SendRequestAsync<T>(string url, HttpMethod method)
        {
            try
            {
                using HttpClient client = new HttpClient();
                using HttpRequestMessage request = new HttpRequestMessage();

                request.Method = method;
                request.RequestUri = new Uri(url);

                HttpResponseMessage response = await client.SendAsync(request).ConfigureAwait(continueOnCapturedContext: false);

                string responseContent = await response.Content.ReadAsStringAsync();
                if (response.StatusCode == HttpStatusCode.OK)
                {
                    try
                    {
                        T data = JsonConvert.DeserializeObject<T>(responseContent);
                        return data;
                    }
                    catch
                    {
                        throw;
                    }
                }
                else
                {
                    return default;
                }
            }
            catch (Exception ex)
            {
                return default;
            }
        }
    }
}
