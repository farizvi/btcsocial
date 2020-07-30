using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using BTCSocial.Application.Common.Exceptions;
using BTCSocial.Application.Common.Interfaces;
using BTCSocial.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace BTCSocial.Application.Stories.Queries.GetStoryDetail
{
    public class GetStoryDetailQuery : IRequest<StoryVm>
    {
        public Guid Id { get; set; }
    }

    public class StoryDetailQueryHandler : IRequestHandler<GetStoryDetailQuery, StoryVm>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;

        public StoryDetailQueryHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        
        public async Task<StoryVm> Handle(GetStoryDetailQuery request, CancellationToken cancellationToken)
        {
            var entity = await _context.Stories
                .ProjectTo<StoryVm>(_mapper.ConfigurationProvider)
                .FirstOrDefaultAsync<StoryVm>(l => l.Id == request.Id, cancellationToken);

            if (entity == null)
            {
                throw new NotFoundException(nameof(Story), request.Id);
            }

            return entity;
        }
    }
}