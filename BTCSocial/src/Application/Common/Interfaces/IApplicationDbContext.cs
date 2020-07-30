using BTCSocial.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace BTCSocial.Application.Common.Interfaces
{
    public interface IApplicationDbContext
    {
        DbSet<Story> Stories { get; set; }
        
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}