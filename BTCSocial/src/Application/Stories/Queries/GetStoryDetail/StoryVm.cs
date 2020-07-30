using System;
using BTCSocial.Application.Common.Mappings;
using BTCSocial.Domain.Entities;

namespace BTCSocial.Application.Stories.Queries.GetStoryDetail
{
    public class StoryVm : IMapFrom<Story>
    {
        public Guid Id { get; set; }

        public string StoryText { get; set; }

        public DateTime Created { get; set; }
    }
}