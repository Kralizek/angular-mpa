namespace WebApp.Models
{
    public class ViewUserViewModel
    {
        public UserModel User { get; set; }
    }

    public class UserModel
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
    }
}