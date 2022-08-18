using System.Text.Json;
using System.Text.Json.Serialization;

namespace Test_Project_User_and_Post.Managers
{
    public class HttpRequestManager
    {
        private readonly HttpClient _httpClient;

        public HttpRequestManager(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<T> GetRequest<T>(string url)
        {
            var responseString = await _httpClient.GetStringAsync(url);
            var obj = JsonSerializer.Deserialize<T>(responseString, new JsonSerializerOptions()
            {
                PropertyNameCaseInsensitive = true,
                NumberHandling = JsonNumberHandling.AllowReadingFromString | JsonNumberHandling.WriteAsString| JsonNumberHandling.AllowNamedFloatingPointLiterals
            }); ;
            return obj;
        }       
    }
}
