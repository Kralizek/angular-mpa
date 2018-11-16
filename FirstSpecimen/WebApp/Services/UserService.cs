using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace WebApp.Services
{
    public interface IUserService
    {
        Task<IReadOnlyList<User>> GetUsers();

        Task<User> GetUser(int userId);
    }

    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
    }

    public class HttpUserService : IUserService
    {
        private readonly IHttpClientFactory _clientFactory;
        private HttpClient Http => _clientFactory.CreateClient(NamedHttpClients.JSONPlaceholder);

        public HttpUserService(IHttpClientFactory clientFactory)
        {
            _clientFactory = clientFactory ?? throw new ArgumentNullException(nameof(clientFactory));
        }

        public async Task<User> GetUser(int userId)
        {
            var json = await Http.GetStringAsync($"/users/{userId}");

            return JsonConvert.DeserializeObject<User>(json);
        }

        public async Task<IReadOnlyList<User>> GetUsers()
        {
            var json = await Http.GetStringAsync("/users");

            return JsonConvert.DeserializeObject<User[]>(json);
        }
    }
}