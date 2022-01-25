using AppCore.Entity;
using AppCore.RepositoryInterface;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories
{
    public class TitleRepository : ITitleRepository
    {
        private TitleDbContext db;
        public TitleRepository(TitleDbContext dbContext) 
        {
            db = dbContext;
        }

        public async Task<List<Title>> GetAllTitle()
        {
            var title = await db.Titles.OrderByDescending(x => x.TitleId).ToListAsync();
            return title;
        }

        public async Task<Title> GetDetail(int id)
        {
            var titleDetails = await db.Titles.Include(x => x.Awards).Include(x => x.OtherNames).Include(x => x.StoryLines)
                .Include(x => x.Genres).Include(x => x.TitleParticipants).Include(x => x.TitleGenres).FirstOrDefaultAsync(x => x.TitleId == id);
            
            
            //if (titleDetails == null) return null;
            return titleDetails;
            
        }

        public async Task<List<Title>> GetTitleByName(string name)
        {
            var title = await db.Titles.Where(x => x.TitleName.Contains(name)).ToListAsync();
            return title;
        }
    }
}
