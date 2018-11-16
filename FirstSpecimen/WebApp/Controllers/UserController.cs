using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApp.Models;
using WebApp.Services;

namespace WebApp.Controllers
{
    [Route("users")]
    public class UserController : Controller
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService ?? throw new ArgumentNullException(nameof(userService));
        }

        public IActionResult Index()
        {
            return View();
        }

        [Route("{userId:int}/{*page}")]
        public async Task<IActionResult> ViewUser(int userId)
        {
            var user = await _userService.GetUser(userId);

            var viewModel = new ViewUserViewModel
            {
                User = new UserModel
                {
                    Id = user.Id,
                    Name = user.Name,
                    UserName = user.UserName,
                    Email = user.Email
                }
            };
            return View(viewModel);
        }
    }
}