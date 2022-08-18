using AutoMapper;
using Business_Logic.Interfaces;
using Data_Access.Interfaces;
using Domain.ApiDTOs;
using Domain.DTOs.UserDTOs;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Test_Project_User_and_Post.Managers;

namespace Business_Logic.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly HttpRequestManager _httpRequestManager;
        private readonly string _jsonPlaceHplderApi;
        private readonly IMapper _mapper;

        public UserService(
            IUserRepository userRepository,
            HttpRequestManager httpRequestManager,
            IConfiguration configuration,
            IMapper mapper)
        {
            _userRepository = userRepository;
            _httpRequestManager = httpRequestManager;
            _jsonPlaceHplderApi = configuration["JsonPlaceHolderApiUsers"];
            _mapper = mapper;
        }

        public async Task<bool> CreateUser(int id)
        {
            var user = await _userRepository.GetById(id);
            if (user != null)
            {
                return false;
            }

            var userApi = await _httpRequestManager.GetRequest<UserApiDTO>($"{_jsonPlaceHplderApi}/{id}");
            user = _mapper.Map<User>(userApi);

            if (user==null|| user.Id==null) {
                return false;
            }

            await _userRepository.Insert(user);
            await _userRepository.Save();
            return true;
        }

        public async  Task<bool> DeleteUser(int id)
        {
            var isSuccess = await _userRepository.DeleteById(id);
            if (!isSuccess)
            {
                return false;
            }

            await _userRepository.Save();
            return true;
        }

        public async Task<IEnumerable<UserDTO>> GetUsers()
        {
            var users = await _userRepository.GetAll();

            var userDTOs = _mapper.Map<IEnumerable<UserDTO>>(users);

            return userDTOs;
        }

        public async Task<UserViewDTO> GetUser(int id)
        {
            var user= await _userRepository.GetByIdWithInclude(id, x => x.Include(x => x.Posts));
            var userViewDTO = _mapper.Map<UserViewDTO>(user);
            return userViewDTO;
        }
    }
}
