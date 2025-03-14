using Microsoft.AspNetCore.Mvc;

[Route("api/weather")]
[ApiController]
public class WeatherController : ControllerBase
{
    [HttpGet]
    public IActionResult GetWeather()
    {
        return Ok(new { Temperature = "20°C", Condition = "Sunny" });
    }
}