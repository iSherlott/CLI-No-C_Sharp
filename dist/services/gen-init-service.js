"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitIoC = void 0;
class InitIoC {
    static nativeInjectorBootStrapperCode() {
        return `using Domain.Handlers;
using Domain.Repositories;
using Infrastructure.Data;
using Microsoft.Extensions.DependencyInjection;

namespace IoC
{
    public class NativeInjectorBootStrapper
    {
        public static void RegisterServices(IServiceCollection service)
        {
            
        }
    }
}`;
    }
    static generateIoCProjectFile() {
        return `<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>net6.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
  </PropertyGroup>
  <ItemGroup>
    <PackageReference Include="Microsoft.Extensions.DependencyInjection.Abstractions" Version="7.0.0" />
  </ItemGroup>
  <ItemGroup>
    <ProjectReference Include="..\\Domain\\Domain.csproj" />
    <ProjectReference Include="..\\Infrastructure\\Infrastructure.csproj" />
  </ItemGroup>
</Project>`;
    }
}
exports.InitIoC = InitIoC;
