using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AppCore.Entity;

namespace AppCore.RepositoryInterface
{
    public interface ITitleRepository
    {
        Task<List<Title>> GetAllTitle();
        Task<List<Title>> GetTitleByName(string name);
        Task<Title> GetDetail(int id);
    }
}
