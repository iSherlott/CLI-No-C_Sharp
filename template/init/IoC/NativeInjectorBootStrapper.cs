using Domain.Handlers;
using Domain.Helpers;
using Domain.Repositories;
using Infrastructure.Repositories;


using Microsoft.Extensions.DependencyInjection;

namespace IoC
{
    public class NativeInjectorBootStrapper
    {
        public static void RegisterServices(IServiceCollection services)
        {

            /* repositories */

            /* handlers */

            /* Services */

            /* Helper */
            services.AddScoped<IMapper, Mapper>();

        }
    }
}