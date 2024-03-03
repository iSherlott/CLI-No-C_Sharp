using Application.DTOs.Request;
using Application.DTOs.Response;
using Application.Services;
using Microsoft.AspNetCore.Identity;

namespace Identity.Services
{
    public class IdentityService : IIdentityService
    {
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly UserManager<IdentityUser> _userManager;

        public IdentityService(SignInManager<IdentityUser> signInManager,
                               UserManager<IdentityUser> userManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }

        public async Task<RegisterAspNetUsersResponse> RegisterAspNetUsers(RegisterAspNetUsersRequest registerAspNetUsers)
        {
            var identityUser = new IdentityUser
            {
                UserName = registerAspNetUsers.Email,
                Email = registerAspNetUsers.Email,
                EmailConfirmed = true
            };

            var result = await _userManager.CreateAsync(identityUser);
            if (result.Succeeded)
                await _userManager.SetLockoutEnabledAsync(identityUser, false);

            var registerAspNetUsersResponse = new RegisterAspNetUsersResponse(result.Succeeded);
            if (!result.Succeeded && result.Errors.Count() > 0)
                registerAspNetUsersResponse.AddErros(result.Errors.Select(r => r.Description));

            return registerAspNetUsersResponse;
        }
    }
}
