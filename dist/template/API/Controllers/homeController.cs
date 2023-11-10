using Microsoft.AspNetCore.Mvc;
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
