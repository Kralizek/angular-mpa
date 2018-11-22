using Microsoft.AspNetCore.Mvc;

namespace WebApp.Controllers
{
    [Route("albums")]
    public class AlbumController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [Route("{albumId:int}/{*page}")]
        public IActionResult ViewAlbum(int albumId)
        {
            return View();
        }
    }
}