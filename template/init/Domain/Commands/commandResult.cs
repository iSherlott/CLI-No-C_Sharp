using Domain.Commands.Contracts;
using System.Collections.Generic;
using System.Net;

namespace Domain.Commands
{
    public class CommandResult : ICommandResult
    {
        public CommandResult() { }

        public CommandResult(HttpStatusCode statusCode)
        {
            StatusCode = statusCode;
        }

        public CommandResult(List<string> contentList, HttpStatusCode statusCode)
        {
            SetDataAndStatusCode(contentList, statusCode);
        }

        public CommandResult(string contentString, HttpStatusCode statusCode)
        {
            SetDataAndStatusCode(contentString, statusCode);
        }

        public CommandResult(object contentObject, HttpStatusCode statusCode)
        {
            SetDataAndStatusCode(contentObject, statusCode);
        }

        private void SetDataAndStatusCode(object data, HttpStatusCode statusCode)
        {
            if ((int)statusCode >= 100 && (int)statusCode <= 399)
            {
                Data = data;
            }
            else if ((int)statusCode >= 400 && (int)statusCode <= 599)
            {
                if (data != null)
                {
                    Errors.Add(data.ToString());
                }
                else
                {
                    Errors.Add($"Unexpected status code: {statusCode}. No error data provided.");
                }
            }
            else
            {
                Errors.Add($"Unexpected status code: {statusCode}. Content: {data}");
            }

            StatusCode = statusCode;
        }

        private List<string> Errors { get; set; } = new();

        public IReadOnlyList<string> GetErrors()
        {
            return Errors.AsReadOnly();
        }

        public object Data { get; private set; }
        public HttpStatusCode StatusCode { get; private set; } = HttpStatusCode.OK;
    }
}
