using System.Threading.Tasks;
using BTCSocial.Application.Stories.Commands.CreateStory;
using BTCSocial.Application.Stories.Queries.GetStories;
using FluentAssertions;
using NUnit.Framework;

namespace BTCSocial.Application.IntegrationTests.Stories.Queries
{
    using static Testing;
    
    public class GetStoriesTests : TestBase
    {
        [Test]
        public async Task ShouldReturnStories()
        {
            await SendAsync(new CreateStoryCommand
            {
                StoryText = "Test Story 1"
            });
            
            await SendAsync(new CreateStoryCommand
            {
                StoryText = "Test Story 2"
            });
            
            await SendAsync(new CreateStoryCommand
            {
                StoryText = "Test Story 3"
            });
            
            var query = new GetStoriesQuery();
            var result = await SendAsync(query);

            result.Stories.Should().HaveCount(3);
        }
        
    }
}