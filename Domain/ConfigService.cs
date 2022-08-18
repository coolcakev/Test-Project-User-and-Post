using Domain.MappingProfiles;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public static class ConfigureServices
    {
        public static IServiceCollection AddDomain(this IServiceCollection services)
        {
            services.AddAutoMapper(
               typeof(PostProfile),
               typeof(UserProfile));
              

            return services;
        }
    }
}
