
using AutoMapper;
using Domain.ApiDTOs;
using Domain.DTOs;
using Domain.DTOs.PostDTOs;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.MappingProfiles
{
    public class PostProfile:Profile
    {
        public PostProfile()
        {
            CreateMap<Post, SelectDTO>()
                .ForMember(x=>x.Name,res=>res.MapFrom(x=>x.Title));
            CreateMap<PostApiDTO,Post>();
            CreateMap<Post, PostViewDTO>()
                .ForMember(x=>x.User,res=>res.MapFrom(x=>x.User));

            CreateMap<Post, PostDTO>()
                  .ForMember(x => x.User, res => res.MapFrom(x => x.User));
        }
    }
}
