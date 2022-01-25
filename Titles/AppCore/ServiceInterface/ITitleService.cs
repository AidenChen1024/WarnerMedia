using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AppCore.Entity;
namespace AppCore.ServiceInterfaces
{
    public interface ITitleService
    {
        Task<Title> GetDetail(int id);
        Task<List<Title>> GetAllTitle();
        Task<List<Title>> GetTitleByName(string name);
        
    }
}
