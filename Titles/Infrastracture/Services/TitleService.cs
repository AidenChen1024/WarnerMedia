using AppCore.Entity;
using AppCore.RepositoryInterface;
using AppCore.ServiceInterfaces;

namespace Infrastructure.Services
{
    public class TitleService : ITitleService
    {
        private  ITitleRepository _titleRepository;
        public TitleService(ITitleRepository titleRepository)
        {
            _titleRepository = titleRepository;
        }
        public Task<List<Title>> GetAllTitle()
        {
            return _titleRepository.GetAllTitle(); 
        }
        public Task<Title> GetDetail(int id)
        {
            return _titleRepository.GetDetail(id);
        }
        public Task<List<Title>> GetTitleByName(string name)
        {
            return _titleRepository.GetTitleByName(name);
        }
    }
}
