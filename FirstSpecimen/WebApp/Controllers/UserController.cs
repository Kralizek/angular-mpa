using Microsoft.AspNetCore.Mvc;
using WebApp.Filters;

namespace WebApp.Controllers
{

    [Route("users")]
    public class UserController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }

        [Route("{userId:int}/{*page}")]
        // [PageTypeActionFilter("ViewUser")]
        public IActionResult ViewUser(int userId)
        {
            return View();
        }
    }
}