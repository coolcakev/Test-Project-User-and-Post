using Business_Logic.Interfaces;
using Business_Logic.Services;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Test_Project_User_and_Post.Managers;

namespace Business_Logic
{
    public static class ConfigureServices
    {
        public static IServiceCollection AddApiServices(this IServiceCollection services)
        {           
            services.AddScoped<HttpRequestManager>();
            services.AddScoped<IPostService, PostServices>();
            services.AddScoped<IUserService, UserService>();
            return services;
        }
    }
}
