using Domain.Commands.Contracts;
using System.Net;

namespace Domain.Commands
{
    public class CommandResult : ICommandResult
    {
        public CommandResult()
        {

        }

        public CommandResult(object data, List<string> errors, HttpStatusCode statusCode)
        {
            Data = data;
            Errors = errors;
            StatusCode = statusCode;
        }
        public CommandResult(object data, HttpStatusCode statusCode)
        {
            Data = data;
            StatusCode = statusCode;
        }
        public CommandResult(object data, List<string> errors)
        {
            Data = data;
            Errors = errors;
        }
        public CommandResult(List<string> errors, HttpStatusCode statusCode)
        {
            Errors = errors;
            StatusCode = statusCode;
        }
        public CommandResult(string error, HttpStatusCode statusCode)
        {
            Errors.Add(error);
            StatusCode = statusCode;
        }
        public CommandResult(object data)
        {
            Data = data;
        }
        public CommandResult(List<string> errors)
        {
            Errors = errors;
        }
        public CommandResult(string error)
        {
            Errors.Add(error);
        }
        public CommandResult(HttpStatusCode statusCode)
        {
            StatusCode = statusCode;
        }
        public object Data { get; private set; }
        public List<string> Errors { get; private set; } = new();
        public HttpStatusCode StatusCode { get; private set; } = HttpStatusCode.OK;
    }
}
