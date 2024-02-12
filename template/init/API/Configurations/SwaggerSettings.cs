using Microsoft.Extensions.Configuration;
using Microsoft.OpenApi.Models;
using System.Configuration;

namespace API.Configurations
{
    public class SwaggerSettings
    {
        public string Title { get; set; }
        public string Version { get; set; }
        public string Description { get; set; }
    }
    public static class SwaggerConfig
    {

        public static void AddSwagger(this IServiceCollection services, IConfiguration configuration)
        {
            var swaggerSettings = configuration.GetSection("Swagger").Get<SwaggerSettings>();

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = swaggerSettings.Title,
                    Version = swaggerSettings.Version,
                    Description = swaggerSettings.Description,
                });
            });
        }
    }
}