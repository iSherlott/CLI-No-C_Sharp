using System.ComponentModel.DataAnnotations;

namespace Application.DTOs.Request
{
    public class RegisterAspNetUsersRequest
    {
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        [EmailAddress(ErrorMessage = "O campo {0} é obrigatório")]
        public string Email { get; set; }

    }
}
