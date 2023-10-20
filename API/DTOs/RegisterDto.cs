using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string DisplayName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }
        
        [Required]
        [RegularExpression("(?=.*\\d)(?=.*[A-Z])(?=.*[a-z]).{8-20}$", ErrorMessage = "Пароль должен быть сложным")]
        public string Password { get; set; }

        [Required]
        public string Username { get; set; } 
    }
}