using FluentValidation;

namespace BTCSocial.Application.Stories.Commands.CreateStory
{
    public class CreateStoryCommandValidator : AbstractValidator<CreateStoryCommand>
    {
        public CreateStoryCommandValidator()
        {
            RuleFor(s => s.StoryText)
                .MaximumLength(200)
                .NotEmpty();
        }
    }
}