using Microsoft.AspNetCore.Mvc;
using AppCore.ServiceInterfaces;
using System.Linq;
namespace Titles.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TitleController : Controller
    {
        private readonly ITitleService _titleService;
        
        public TitleController(ITitleService titleService)
        {
            _titleService = titleService;
        }

        [HttpGet("GetDetail")]
        public async Task<IActionResult> GetDetail(int id)
        {
            var title = await _titleService.GetDetail(id);
            if (title == null) return NotFound();

            return Ok(title);

        }

        [HttpGet("GetTitleByName")]
        public async Task<IActionResult> GetTitleByName(string name)
        {
            var title = await _titleService.GetTitleByName(name);
            if (title == null) return NotFound();

            return Ok(title);
        }

        [HttpGet("AllTitle")]
        public async Task<IActionResult> AllTitle()
        {
            var title = await _titleService.GetAllTitle();
            if (title == null) return NotFound();

            return Ok(title);
        }


    }
}
