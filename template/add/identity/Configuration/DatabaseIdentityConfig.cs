using Identity.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Identity;
using Application.Services;
using Identity.Services;

namespace Identity.Configuration
{
    public static class DatabaseIdentityConfig
    {
        public static IServiceCollection AddDatabaseIdentityConfiguration(this IServiceCollection services, string connectionString)
        {
            services
                .AddDbContext<IdentityDataContext>(b => b.UseSqlServer(connectionString));

            services.AddDefaultIdentity<IdentityUser>()
                .AddRoles<IdentityRole>()
                .AddEntityFrameworkStores<IdentityDataContext>()
                .AddDefaultTokenProviders();

            services.AddScoped<IIdentityService, IdentityService>();

            return services;
        }
    }
}