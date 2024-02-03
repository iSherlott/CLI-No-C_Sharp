using Microsoft.AspNetCore.Mvc;
using Application.Dictionary;
using Application.DTOs.Response;
using System.Net;

namespace API.Controllers.Contract
{
    public class BaseController : Controller
    {
        protected readonly DefaultDictionary _defaultDictionary;

        public BaseController(DefaultDictionary defaultDictionary)
        {
            _defaultDictionary = defaultDictionary;
        }

        protected IActionResult ApiResponse(object data, string message, HttpStatusCode status)
        {
            var response = new ApiResponseModel<object>
            {
                Data = data,
                Message = message,
                Status = status
            };

            return StatusCode((int)status, response);
        }
    }
}
