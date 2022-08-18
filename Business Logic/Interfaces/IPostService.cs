using Domain.DTOs;
using Domain.DTOs.PostDTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business_Logic.Interfaces
{
    public interface IPostService
    {
        Task<bool> Create(int useId, int id);
        Task<PostViewDTO> GetPost(int id);
        Task<bool> DeletePost(int id);
        Task<bool> UpdatePost(UpdatePostDTO postDTO);
        Task<IEnumerable<PostDTO>> GetPosts();
    }
}
