using System;
using System.Collections.Generic;
using BTCSocial.Domain.Entities;
using System.Linq;
using System.Threading.Tasks;

namespace BTCSocial.Infrastructure.Persistence
{
    public static class ApplicationDbContextSeed
    {
        public static async Task SeedSampleDataAsync(ApplicationDbContext context)
        {
            // Seed, if necessary
            
            if (!context.Stories.Any())
            {
                var stories = new List<Story>
                {
                    new Story 
                    {
                        Id = Guid.NewGuid(),
                        StoryText = "Sample Story 1",
                        Created = DateTime.Now
                    },
                    new Story 
                    {
                        Id = Guid.NewGuid(),
                        StoryText = "Sample Story 2",
                        Created = DateTime.Now
                    },
                    new Story 
                    {
                        Id = Guid.NewGuid(),
                        StoryText = "Sample Story 3",
                        Created = DateTime.Now
                    },
                    new Story 
                    {
                        Id = Guid.NewGuid(),
                        StoryText = "Sample Story 4",
                        Created = DateTime.Now
                    },
                    new Story 
                    {
                        Id = Guid.NewGuid(),
                        StoryText = "Sample Story 5",
                        Created = DateTime.Now
                    }
                };
                
                await context.Stories.AddRangeAsync(stories);

                await context.SaveChangesAsync();
            }
        }
    }
}