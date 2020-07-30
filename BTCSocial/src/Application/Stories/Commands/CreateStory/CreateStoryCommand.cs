using System;
using System.Threading;
using System.Threading.Tasks;
using BTCSocial.Application.Common.Interfaces;
using BTCSocial.Domain.Entities;
using MediatR;

namespace BTCSocial.Application.Stories.Commands.CreateStory
{
    public class CreateStoryCommand : IRequest<Guid>
    {
        public string StoryText { get; set; }
    }

    public class CreateStoryCommandHandler : IRequestHandler<CreateStoryCommand, Guid>
    {
        private readonly IApplicationDbContext _context;
        
        public CreateStoryCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }
        
        public async Task<Guid> Handle(CreateStoryCommand request, CancellationToken cancellationToken)
        {
            var entity = new Story
            {
                Id = Guid.NewGuid(),
                StoryText = request.StoryText,
                Created = DateTime.Now
            };

            _context.Stories.Add(entity);

            await _context.SaveChangesAsync(cancellationToken);

            return entity.Id;
        }
    }
}