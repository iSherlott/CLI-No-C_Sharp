using Domain.Handlers;
using Domain.Repositories;
using Infrastructure.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace IoC
{
    public class NativeInjectorBootStrapper
    {
        public static void RegisterServices(IServiceCollection service)
        {
            //Repository
            {{#repositories}}
            {{/repositories}}

            //Handler
            {{#handlers}}
            {{/handlers}}
        }
    }
}