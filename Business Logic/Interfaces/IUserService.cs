using Domain.DTOs.UserDTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business_Logic.Interfaces
{
    public interface IUserService
    {
        Task<bool> CreateUser(int id);
        Task<UserViewDTO> GetUser(int id);
        Task<bool> DeleteUser(int id);
        Task<IEnumerable<UserDTO>> GetUsers();
    }
}
