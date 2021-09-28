using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if(!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Jerry",
                    Email = "jerry@test.com",
                    UserName = "jerry@text.com",
                    Address = new Address
                    {
                        FirstName = "Jerry",
                        LastName = "Jerryity",
                        Street = "7 the Street",
                        City = "New York",
                        State = "NY",
                        ZipCode = "90212"


                    }

                };
                await userManager.CreateAsync(user,"Pa$$w0rd");
            }
        }
    
    }
}