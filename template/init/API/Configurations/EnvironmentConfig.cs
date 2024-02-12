
namespace API.Configurations
{
    public static class EnvironmentConfig
    {
        public static void AddEnvironment(this IConfigurationBuilder configuration, IHostEnvironment environment)
        {
            if (environment.IsDevelopment()) configuration.AddJsonFile("appsettings.Development.json", optional: true);
            else if (environment.IsStaging()) configuration.AddJsonFile("appsettings.Staging.json", optional: true);
            else configuration.AddJsonFile("appsettings.json", optional: true);
        }
    }
}