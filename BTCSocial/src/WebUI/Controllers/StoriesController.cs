using System;
using System.Threading.Tasks;
using BTCSocial.Application.Stories.Commands.CreateStory;
using BTCSocial.Application.Stories.Queries.GetStories;
using BTCSocial.Application.Stories.Queries.GetStoryDetail;
using Microsoft.AspNetCore.Mvc;

namespace BTCSocial.WebUI.Controllers
{
    public class StoriesController : ApiController
    {
        [HttpGet]
        public async Task<ActionResult<StoriesVm>> Get()
        {
            return await Mediator.Send(new GetStoriesQuery());
        }
        
        [HttpGet("{id}")]
        public async Task<StoryVm> Get(Guid id)
        {
            return await Mediator.Send(new GetStoryDetailQuery{ Id = id});
        }

        [HttpPost]
        public async Task<ActionResult<Guid>> Create(CreateStoryCommand command)
        {
            return await Mediator.Send(command);
        }
        
    }
}