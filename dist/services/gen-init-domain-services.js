"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitDomain = void 0;
class InitDomain {
    static nativeDomain() {
        return `<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <TargetFramework>net6.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
  </PropertyGroup>

</Project>
        `;
    }
    static nativeCommandResult() {
        return `using Domain.Commands.Contracts;
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
        `;
    }
    static nativeICommand() {
        return `using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Commands.Contracts
{
    public interface ICommand
    {
    }
}
        `;
    }
    static nativeICommandResult() {
        return `namespace Domain.Commands.Contracts
{
    public interface ICommandResult
    {
    }
}
        `;
    }
    static nativeBaseEntity() {
        return `using Domain.Validation;

namespace Domain.Entities
{
    public class BaseEntity : Validatable
    {
        public Guid id { get; set; }
        public DateTimeOffset created { get; private set; }
        public DateTimeOffset? update { get; private set; }
        public BaseEntity()
        {
            created = DateTime.UtcNow;
            update = null; 
        }

        public void setCreated(DateTimeOffset created) { this.created = created; }
        public void setUpdate(DateTimeOffset update) {  this.update = update; }


    }
}
        `;
    }
    static nativeIHandler() {
        return `using Domain.Commands.Contracts;

namespace Domain.Handlers.Contracts
{
    public interface IHandler<T> where T : ICommand
    {
        Task<ICommandResult> Handle(T command);
    }
}
        `;
    }
    static nativeValidation() {
        return `using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Validation
{
    public class Validatable
    {
        [NotMapped]
        public List<string> Errors { get; private set; } = new List<string>();
        [NotMapped]
        public bool isValid { get; private set; } = true;
        public void addError(string error) 
        { 
            this.isValid = false;
            Errors.Add(error); 
        }
        public void addErrors(List<string> errors)
        {
            this.isValid = false;
            this.Errors.AddRange(errors);
        }
    }
}
        `;
    }
    static nativeValidatableTypes() {
        return `namespace Domain.Validation
{
    public class ValidatableTypes : Validatable
    {
        protected void ValidateStringNotEmpty(string value, string fieldName)
        {
            if (string.IsNullOrWhiteSpace(value))
            {
                addError($"{fieldName} cannot be empty");
            }
        }

        protected void ValidateGuidNotEmpty(Guid value, string fieldName)
        {
            if (value == Guid.Empty)
            {
                addError($"{fieldName} cannot be empty");
            }
        }

        protected void ValidateIntGreaterThanZero(int value, string fieldName)
        {
            if (value <= 0)
            {
                addError($"{fieldName} should be greater than zero");
            }
        }

        protected void ValidateDecimalGreaterThanZero(decimal value, string fieldName)
        {
            if (value <= 0)
            {
                addError($"{fieldName} should be greater than zero");
            }
        }

        protected void ValidateDateTimeNotDefault(DateTime value, string fieldName)
        {
            if (value == default(DateTime))
            {
                addError($"{fieldName} cannot be the default DateTime value");
            }
        }
    }
}
        `;
    }
}
exports.InitDomain = InitDomain;
