using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppCore.Entity
{
    public class Title
    {
        
        public int TitleId { get; set; }
        public string TitleName { get; set; }
        public string TitleNameSortable { get; set; }
        public int? TitleTypeId { get; set; }
        public int? ReleaseYear { get; set; }
        public DateTime? ProcessedDateTimeUtc { get; set; }


        public List<Award> Awards { get; set; }= new List<Award>();
        public List<OtherName> OtherNames { get; set; } = new List<OtherName>();
        public List<StoryLine> StoryLines { get; set; } = new List <StoryLine>();
        public List<Genre> Genres { get; set; }= new List <Genre>();
        public List<TitleParticipant> TitleParticipants { get; set; } = new List<TitleParticipant>();
        public List<TitleGenre> TitleGenres { get; set; } = new List<TitleGenre>();
    }
}
