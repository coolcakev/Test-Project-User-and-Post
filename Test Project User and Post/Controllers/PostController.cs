using Business_Logic.Interfaces;
using Domain.DTOs.PostDTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Test_Project_Post_and_Post.Controllers
{
    [Route("api/posts")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostService _postService;

        public PostController(IPostService postService)
        {
            _postService = postService;
        }

        [HttpPost("{userId}/{id}")]
        public async Task<IActionResult> Create(int userId, int id)
        {
            var isSuccess = await _postService.Create(userId, id);
            if (isSuccess)
            {
                return Ok();
            }
            return BadRequest();
        }
        [HttpGet("")]
        public async Task<IActionResult> GetPosts()
        {
            var posts = await _postService.GetPosts();
            return Ok(posts);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPost(int id)
        {
            var post = await _postService.GetPost(id);
            if (post != null)
            {
                return Ok(post);

            }
            return NotFound();
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePost(int id, [FromBody] UpdatePostDTO postDTO)
        {
            postDTO.Id = id;
            var isSuccess = await _postService.UpdatePost(postDTO);
            if (isSuccess)
            {
                return NoContent();
            }
            return NotFound();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePost(int id)
        {
            var isSuccess = await _postService.DeletePost(id);
            if (isSuccess)
            {
                return Ok();
            }
            return NotFound();
        }
    }
}
