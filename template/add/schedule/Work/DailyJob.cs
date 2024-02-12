using Quartz;

namespace Schedule.Work
{
    public class DailyJob : IJob
    {
        public Task Execute(IJobExecutionContext context)
        {
            Console.WriteLine("exec task");

            return Task.CompletedTask;
        }
    }
}
