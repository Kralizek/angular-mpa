using Microsoft.AspNetCore.Mvc;

namespace WebApp.Controllers
{
    [Route("posts")]
    public class PostController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [Route("{postId:int}/{*page}")]
        public IActionResult ViewPost(int postId)
        {
            return View();
        }
    }    
}