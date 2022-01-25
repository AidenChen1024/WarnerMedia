using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppCore.Entity
{
    public class Participant
    {       
        public int Id { get; set; }
        public string Name { get; set; }
        public string ParticipantType { get; set; }

        public List<TitleParticipant> TitleParticipants { get; set; } = new List<TitleParticipant>();
    }
}
