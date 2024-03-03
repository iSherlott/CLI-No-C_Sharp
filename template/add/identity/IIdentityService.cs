using Application.DTOs.Request;
using Application.DTOs.Response;

namespace Application.Services
{
    public interface IIdentityService
    {
        Task<RegisterAspNetUsersResponse> RegisterAspNetUsers(RegisterAspNetUsersRequest registerAspNetUsersRequest);
    }
}
