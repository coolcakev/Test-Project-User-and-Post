using Business_Logic;
using Data_Access;
using Domain;

namespace Test_Project_User_and_Post
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddCors((options) => {
                options.AddPolicy("Default", policy =>
                {
                    policy.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod();
                });
            });
            builder.Services.AddHttpClient();
            builder.Services.AddApiServices();
            builder.Services.AddDataAccess(builder.Configuration);
            builder.Services.AddDomain();

            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();         
            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            app.UseCors("Default");

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}