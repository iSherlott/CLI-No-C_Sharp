export class InitAPI {
  public static nativeProgram(): string {
    return `using API.Configurations;
using Infrastructure.Configuration;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
//builder.Services.AddLogging<ILogger>();

builder.Services.AddIoc();
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

string connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDatabaseConfiguration(connectionString);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
        `
  }

  public static nativeAPI(): string {
    return `<Project Sdk="Microsoft.NET.Sdk.Web">

  <PropertyGroup>
    <TargetFramework>net6.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Microsoft.EntityFrameworkCore.Design" Version="7.0.11">
      <PrivateAssets>all</PrivateAssets>
      <IncludeAssets>runtime; build; native; contentfiles; analyzers; buildtransitive</IncludeAssets>
    </PackageReference>
    <PackageReference Include="Microsoft.EntityFrameworkCore.Sqlite" Version="6.0.21" />
    <PackageReference Include="Microsoft.EntityFrameworkCore.SqlServer" Version="6.0.21" />
    <PackageReference Include="Microsoft.EntityFrameworkCore.Tools" Version="6.0.21">
      <PrivateAssets>all</PrivateAssets>
      <IncludeAssets>runtime; build; native; contentfiles; analyzers; buildtransitive</IncludeAssets>
    </PackageReference>
    <PackageReference Include="Microsoft.VisualStudio.Web.CodeGeneration.Design" Version="6.0.16" />
    <PackageReference Include="Swashbuckle.AspNetCore" Version="6.5.0" />
  </ItemGroup>

  <ItemGroup>
    <ProjectReference Include="..\\Infrastructure\\Infrastructure.csproj" />
    <ProjectReference Include="..\\IoC\\IoC.csproj" />
  </ItemGroup>

  <ItemGroup>
    <Folder Include="Configurations" />
  </ItemGroup>

</Project>`
  }

  public static nativeAppsettingsD(): Object {
    return {
      "Logging": {
        "LogLevel": {
          "Default": "Information",
          "Microsoft.AspNetCore": "Warning"
        }
      }
    }
  }

  public static nativeAppsettings(): Object {
    return `{
            "ConnectionStrings": {
              "DefaultConnection": ""
            },
            "Logging": {
              "LogLevel": {
                "Default": "Information",
                "Microsoft.AspNetCore": "Warning"
              }
            },
            "AllowedHosts": "*"
          }
        `
  }

  public static propertiesLaunchSettings(): Object {
    return {
      "$schema": "https://json.schemastore.org/launchsettings.json",
      "iisSettings": {
        "windowsAuthentication": false,
        "anonymousAuthentication": true,
        "iisExpress": {
          "applicationUrl": "http://localhost:22534",
          "sslPort": 44318
        }
      },
      "profiles": {
        "API": {
          "commandName": "Project",
          "dotnetRunMessages": true,
          "launchBrowser": true,
          "launchUrl": "swagger",
          "applicationUrl": "https://localhost:7213;http://localhost:5057",
          "environmentVariables": {
            "ASPNETCORE_ENVIRONMENT": "Development"
          }
        },
        "IIS Express": {
          "commandName": "IISExpress",
          "launchBrowser": true,
          "launchUrl": "swagger",
          "environmentVariables": {
            "ASPNETCORE_ENVIRONMENT": "Development"
          }
        }
      }
    }

  }

  public static homeController(): string {
    return `using Microsoft.AspNetCore.Mvc;
using System;

namespace API.Controllers
{
    [Route("api/")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly DateTime _startupTime;

        public HomeController()
        {
            _startupTime = DateTime.Now;
        }

        [HttpGet()]
        public IActionResult IsOnline()
        {
            var response = new
            {
                data = new
                {
                    startupTime = _startupTime
                },
                message = "Rota gerada automaticamente para a Home",
                status = 200
            };

            return Ok(response);
        }
    }
}
`
  }

  public static DependecyInjectionConfig(): string {
    return `using IoC;

namespace API.Configurations
{
    public static class DependecyInjectionConfig
    {
        public static void AddIoc(this IServiceCollection services)
        {
            if (services == null) throw new ArgumentNullException(nameof(services));
            
            NativeInjectorBootStrapper.RegisterServices(services);
            
        }
    }
}`
  }
}