using System.Collections.Generic;
using System.Threading.Tasks;

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
        public Task<User> GetUser(int userId)
        {
            throw new System.NotImplementedException();
        }

        public Task<IReadOnlyList<User>> GetUsers()
        {
            throw new System.NotImplementedException();
        }
    }
}