using AutoMapper;
using Business_Logic.Interfaces;
using Data_Access.Interfaces;
using Domain.ApiDTOs;
using Domain.DTOs.PostDTOs;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Test_Project_User_and_Post.Managers;
using System.Linq.Dynamic.Core;
using Domain.DTOs;

namespace Business_Logic.Services
{
    public class PostServices : IPostService
    {
        private readonly IPostRepository _postRepository;
        private readonly HttpRequestManager _httpRequestManager;
        private readonly string _jsonPlaceHplderApi;
        private readonly IMapper _mapper;

        public PostServices(IPostRepository postRepository,
            HttpRequestManager httpRequestManager,
            IMapper mapper,
            IConfiguration configuration)
        {
            _postRepository = postRepository;
            _httpRequestManager = httpRequestManager;
            _mapper = mapper;
            _jsonPlaceHplderApi = configuration["JsonPlaceHolderApiPost"];
        }

        public async Task<bool> Create(int useId, int id)
        {
            var post = await _postRepository.GetById(id);
            if (post != null)
            {
                return false;
            }

            var apiPost = await _httpRequestManager.GetRequest<PostApiDTO>($"{_jsonPlaceHplderApi}/{id}");
            post = _mapper.Map<Post>(apiPost);
            if (post == null)
            {
                return false;
            }
            post.UserId = useId;

            await _postRepository.Insert(post);
            await _postRepository.Save();
            return true;
        }

        public async  Task<bool> DeletePost(int id)
        {
            var isSuccess = await _postRepository.DeleteById(id);
            if (!isSuccess) {
                return false;
            }

            await _postRepository.Save();
            return true;
        }

        public async Task<PostViewDTO> GetPost(int id)
        {
            var user = await _postRepository.GetByIdWithInclude(id, x => x.Include(x => x.User));
            var userViewDTO = _mapper.Map<PostViewDTO>(user);
            return userViewDTO;
        }

        public async Task<IEnumerable<PostDTO>> GetPosts()
        {
            var posts = await _postRepository.GetAllWithInclude(               
                include:x=>x.Include(x=>x.User));

            var postDTOs= _mapper.Map<IEnumerable<PostDTO>>(posts);          

            return postDTOs;
        }

        public async  Task<bool> UpdatePost(UpdatePostDTO postDTO)
        {
            var post = await _postRepository.GetById(postDTO.Id);
            if (post==null) {
                return false;
            }
            
            post.Title = postDTO.Title;
            post.Body = postDTO.Body;
            _postRepository.Update(post);

            await _postRepository.Save();
            return true;
        }
    }
}
