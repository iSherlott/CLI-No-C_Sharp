using Schedule.Work;

using Microsoft.Extensions.DependencyInjection;
using Quartz;

namespace Schedule
{
    public class QuartzScheduler
    {
        public static void Start(IServiceCollection services)
        {
            services.AddQuartz(provider =>
            {
                provider.AddJob<DailyJob>(options => options.WithIdentity("dailyTrigger"));
                provider.AddTrigger(options => options
                    .ForJob("dailyTrigger")
                    .WithIdentity("job1")
                    .StartAt(DateTimeOffset.Now.AddSeconds(5)
                    ));
            });

            services.AddQuartzHostedService(options => options.WaitForJobsToComplete = true);
        }
    }
}
