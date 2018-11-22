using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace WebApp.Filters
{
    public class PageDataActionFilter : IAsyncActionFilter
    {
        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            if (context.Controller is Controller controller)
            {
                if (controller.ViewBag.PageData == null)
                {
                    controller.ViewBag.PageData = new ExpandoObject();
                }

                controller.ViewBag.PageData.routeValues = context.RouteData.Values;
            }

            await next();
        }
    }
}
