using System;
using System.Dynamic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace WebApp.Filters
{
    [AttributeUsage(AttributeTargets.Method)]
    public class PageTypeActionFilter : Attribute, IAsyncActionFilter
    {
        private readonly string _pageType;

        public PageTypeActionFilter(string pageType)
        {
            _pageType = pageType ?? throw new ArgumentNullException(nameof(pageType));
        }

        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            if (context.Controller is Controller controller)
            {
                if (controller.ViewBag.PageData == null)
                {
                    controller.ViewBag.PageData = new ExpandoObject();
                }

                controller.ViewBag.PageData.pageType = _pageType;
            }

            await next();
        }
    }
}