using BTCSocial.Application.Common.Exceptions;
using BTCSocial.Application.Stories.Commands.CreateStory;
using FluentAssertions;
using NUnit.Framework;
using System;
using System.Threading.Tasks;
using BTCSocial.Domain.Entities;

namespace BTCSocial.Application.IntegrationTests.Stories.Commands
{
    using static Testing;
    
    public class CreateStoryTests : TestBase
    {
        [Test]
        public void ShouldRequireMinimumFields()
        {
            var command = new CreateStoryCommand();

            FluentActions.Invoking(() =>
                SendAsync(command)).Should().Throw<ValidationException>();
        }
        
        [Test]
        public async Task ShouldCreateStory()
        {
            var storyId = await SendAsync(new CreateStoryCommand
            {
                StoryText = "Test Story"
            });

            var storyFound = await FindAsync<Story>(storyId);

            storyFound.Should().NotBeNull();
            storyFound.StoryText.Should().Be("Test Story");
            storyFound.Created.Should().BeCloseTo(DateTime.Now, 10000);
        }
    }
}