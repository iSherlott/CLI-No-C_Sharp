using Quartz;
using Quartz.Impl;

namespace Schedule.Configuration
{
    public class QuartzSchedulerFactory
    {
        public static async Task<IScheduler> CreateScheduler()
        {
            ISchedulerFactory schedulerFactory = new StdSchedulerFactory();
            IScheduler scheduler = await schedulerFactory.GetScheduler();

            await scheduler.Start();

            return scheduler;
        }
    }
}