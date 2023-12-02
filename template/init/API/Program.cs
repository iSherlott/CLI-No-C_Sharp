using API.Configurations;
using API.Middleware;
using Infrastructure.Configuration;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
//builder.Services.AddLogging<ILogger>();

builder.Services.AddIoc();
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

string connectionString = Environment.GetEnvironmentVariable("APP_DATABASE_URL", EnvironmentVariableTarget.Machine) ?? builder.Configuration.GetConnectionString("DefaultConnection"); 
builder.Services.AddDatabaseConfiguration(connectionString);


var app = builder.Build();

// Configure the HTTP request pipeline.
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

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
        