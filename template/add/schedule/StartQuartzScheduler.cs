using Schedule;

namespace API.Configurations
{
    public static class StartQuartzScheduler
    {
        public static void AddSchedule(this IServiceCollection services)
        {
            if (services == null) throw new ArgumentNullException(nameof(services));

            QuartzScheduler.Start(services);
        }
    }
}