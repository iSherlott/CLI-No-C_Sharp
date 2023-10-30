"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitAPI = void 0;
class InitAPI {
    static nativeProgram() {
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
        `;
    }
    static nativeAPI() {
        return `
        <Project Sdk="Microsoft.NET.Sdk.Web">

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
    <ProjectReference Include="..\mf.infra\mf.infra.csproj" />
    <ProjectReference Include="..\mf.ioc\mf.ioc.csproj" />
  </ItemGroup>

  <ItemGroup>
    <Folder Include="Configurations\" />
  </ItemGroup>

</Project>
        `;
    }
    static nativeAppsettingsD() {
        return {
            "Logging": {
                "LogLevel": {
                    "Default": "Information",
                    "Microsoft.AspNetCore": "Warning"
                }
            }
        };
    }
    static nativeAppsettings() {
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
        `;
    }
}
exports.InitAPI = InitAPI;
