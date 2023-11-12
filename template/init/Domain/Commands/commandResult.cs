using Domain.Commands.Contracts;
using System.Net;

namespace Domain.Commands
{
    public class CommandResult : ICommandResult
    {
        public object Data { get; }
        public List<string> Errors { get; } = new();
        public HttpStatusCode Status { get; }

        public CommandResult(object data, HttpStatusCode status, List<string> errors)
        {
            Data = data;
            Errors = errors ?? new List<string>();
            Status = status;
        }

        public CommandResult(object data, HttpStatusCode status, string error)
        {
            Data = data;
            Errors.Add(error);
            Status = status;
        }

        public CommandResult(object data)
        {
            Data = data;
        }

        public CommandResult(HttpStatusCode status)
        {
            Status = status;
        }

        public CommandResult(string error)
        {
            Errors.Add(error);
        }
    }
}
        