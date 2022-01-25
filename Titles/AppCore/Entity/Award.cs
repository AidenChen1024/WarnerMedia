using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppCore.Entity
{
    public class Award
    {
        public int Id { get; set; }
        public int TitleId { get; set; }
        public bool? AwardWon { get; set; }
        public int? AwardYear { get; set; }
        public string Awards { get; set; }
        public string AwardCompany { get; set; }

        public Title Title { get; set; }
    }
}
