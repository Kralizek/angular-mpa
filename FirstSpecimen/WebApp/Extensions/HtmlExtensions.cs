using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using Newtonsoft.Json;

namespace WebApp.Extensions
{
    public static class HtmlExtensions
    {
        public static IHtmlContent Json<TModel, T>(this IHtmlHelper<TModel> helper, T item)
        {
            var json = JsonConvert.SerializeObject(item);

            var builder = new HtmlContentBuilder();
            builder.AppendHtml(json);

            return builder;
        }
    }
}