using IoC;

namespace API.Configurations
{
    public static class DependecyInjectionConfig
    {
        public static void AddIoc(this IServiceCollection services)
        {
            if (services == null) throw new ArgumentNullException(nameof(services));
            
            NativeInjectorBootStrapper.RegisterServices(services);
            
        }
    }
}