using Business_Logic.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Test_Project_User_and_Post.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("{id}")]
        public async Task<IActionResult> CreateUser(int id)
        {
            var isSuccess = await _userService.CreateUser(id);
            if (isSuccess)
            {
                return Ok();

            }
            return BadRequest();
        }
        [HttpGet("")]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _userService.GetUsers();

            return Ok(users);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _userService.GetUser(id);
            if (user != null)
            {
                return Ok(user);

            }
            return NotFound();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var isSuccess = await _userService.DeleteUser(id);
            if (isSuccess)
            {
                return Ok();

            }
            return NotFound();
        }
    }
}
