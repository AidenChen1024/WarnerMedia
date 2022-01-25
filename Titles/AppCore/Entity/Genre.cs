

namespace AppCore.Entity
{

    public class Genre
    {
        
        public int Id { get; set; }
        public string Name { get; set; }

        public List<Title> Titles { get; set; } = new List<Title>();
        public List<TitleGenre> TitleGenres { get; set; }= new List<TitleGenre>();
    }
}
