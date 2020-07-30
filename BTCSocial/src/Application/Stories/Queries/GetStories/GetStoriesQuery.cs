using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using BTCSocial.Application.Common.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace BTCSocial.Application.Stories.Queries.GetStories
{
    public class GetStoriesQuery : IRequest<StoriesVm>
    {
        
    }

    public class GetStoriesQueryHandler : IRequestHandler<GetStoriesQuery, StoriesVm>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;

        public GetStoriesQueryHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        
        public async Task<StoriesVm> Handle(GetStoriesQuery request, CancellationToken cancellationToken)
        {
            return new StoriesVm
            {
                Stories = await _context.Stories
                    .ProjectTo<StoryDto>(_mapper.ConfigurationProvider)
                    .OrderBy(s => s.StoryText)
                    .ToListAsync(cancellationToken)
            };
        }
    }
}