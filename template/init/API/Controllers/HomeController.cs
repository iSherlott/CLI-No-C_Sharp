using Microsoft.AspNetCore.Mvc;
using Application.Dictionary;
using API.Controllers.Contract;
using System.Net;

namespace API.Controllers
{
    [Route("api")]
    [ApiController]
    public class HomeController : BaseController
    {
        private readonly DateTime _startupTime;

        public HomeController(DefaultDictionary defaultDictionary) : base(defaultDictionary)
        {
            _startupTime = DateTime.Now;
        }

        [HttpGet]
        public IActionResult IsOnline()
        {
            var responseData = new
            {
                startupTime = _startupTime
            };

            return ApiResponse(
                responseData, 
                _defaultDictionary.Response["Success"], 
                HttpStatusCode.OK
                );
        }
    }
}