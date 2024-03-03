using Azure.Services;
using Application.Services;

namespace API.Configurations
{
    public static class AzureSettings
    {
        public static void AddAzure(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddSingleton(Environment.GetEnvironmentVariable("AZURE_STORAGE_STRING", EnvironmentVariableTarget.Machine) ?? configuration.GetConnectionString("AzureStorageConnectionString"));

            services.AddScoped<IAzureBlobService, AzureBlobService>();
        }
    }
}
