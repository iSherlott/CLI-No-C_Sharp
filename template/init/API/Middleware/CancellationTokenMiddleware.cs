using System.Net;

namespace API.Middleware;
public class CancellationTokenMiddleware
{
    private readonly RequestDelegate _next;

    public CancellationTokenMiddleware(RequestDelegate next)
    {
        _next = next ?? throw new ArgumentNullException(nameof(next));
    }

    public async Task InvokeAsync(HttpContext context)
    {
        using (var cancellationTokenSource = new CancellationTokenSource())
        {
            context.Items["CancellationToken"] = cancellationTokenSource.Token;

            cancellationTokenSource.CancelAfter(TimeSpan.FromSeconds(5));

            try
            {
                await _next(context);
            }
            catch (OperationCanceledException)
            {
                context.Response.StatusCode = (int)HttpStatusCode.RequestTimeout;
                await context.Response.WriteAsync("The operation was canceled due to a timeout.");
            }
        }
    }
}
