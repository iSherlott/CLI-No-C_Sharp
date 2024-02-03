using API.Configurations;
using API.Middleware;
using Infrastructure.Configuration;

var builder = WebApplication.CreateBuilder(args);
if (builder.Environment.IsDevelopment())
{
    builder.Configuration.AddJsonFile("appsettings.Development.json", optional: true);
} else
{
    builder.Configuration.AddJsonFile("appsettings.json");
}

builder.Services.AddIoc();
builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

string connectionString = Environment.GetEnvironmentVariable("APP_DATABASE_URL", EnvironmentVariableTarget.Machine) ?? builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDatabaseConfiguration(connectionString);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(builder =>
    builder.AllowAnyOrigin()
           .AllowAnyMethod()
           .AllowAnyHeader());

app.UseMiddleware<ErrorHandlingMiddleware>();
app.UseMiddleware<CancellationTokenMiddleware>();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
