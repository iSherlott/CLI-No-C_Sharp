using Identity.Configuration;

namespace API.Configurations
{
    public static class IdentitySettings
    {
        public static void AddIdentity(this IServiceCollection services, IConfiguration configuration)
        {
            string connectionString = Environment.GetEnvironmentVariable("APP_DATABASE_URL", EnvironmentVariableTarget.Machine) ?? configuration.GetConnectionString("DefaultConnection");

            services.AddDatabaseIdentityConfiguration(connectionString);
        }
    }
}