using System;
using System.ComponentModel;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Razor.TagHelpers;
using Microsoft.AspNetCore.Razor.TagHelpers;
using Microsoft.Extensions.Logging;

namespace WebApp.TagHelpers
{
    public class AngularFilesTagHelperComponent : TagHelperComponent
    {
        public override async Task ProcessAsync(TagHelperContext context, TagHelperOutput output)
        {
            if (string.Equals(context.TagName, "body", StringComparison.OrdinalIgnoreCase))
            {
                var filesToAdd = await File.ReadAllTextAsync("wwwroot/dist/index.html");

                output.PostContent.AppendHtml(filesToAdd);
            }
        }
    }

    [HtmlTargetElement("angular-files", TagStructure = TagStructure.WithoutEndTag)]
    [EditorBrowsable(EditorBrowsableState.Never)]
    public class AngularFilesTagHelperComponentTagHelper : TagHelperComponentTagHelper
    {
        public AngularFilesTagHelperComponentTagHelper(ITagHelperComponentManager manager, ILoggerFactory loggerFactory) : base(manager, loggerFactory)
        {
        }
    }
}