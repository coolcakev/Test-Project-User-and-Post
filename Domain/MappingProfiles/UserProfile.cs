using AutoMapper;
using Domain.ApiDTOs;
using Domain.DTOs;
using Domain.DTOs.UserDTOs;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.MappingProfiles
{
    public class UserProfile: Profile
    {
        public UserProfile()
        {
            CreateMap<User, SelectDTO>()
                .ForMember(x => x.Name, res => res.MapFrom(x => x.FullName));
            CreateMap<UserApiDTO, User>()
                .ForMember(x => x.FullName, res => res.MapFrom(x => x.Name))
                .ForMember(x => x.Suite, res => res.MapFrom(x => x.Address.Suite))
                .ForMember(x => x.Street, res => res.MapFrom(x => x.Address.Street))
                .ForMember(x => x.Zipcode, res => res.MapFrom(x => x.Address.Zipcode))
                .ForMember(x => x.City, res => res.MapFrom(x => x.Address.City));
            

            CreateMap<User, UserDTO>();
            CreateMap<User, UserViewDTO>()
                .ForMember(x => x.Posts, res => res.MapFrom(x => x.Posts));
        }
    }
}
