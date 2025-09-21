namespace RapBattles.Models
{
    public class HomeIndexViewModel
    {
        public IEnumerable<Battle> Battles { get; set; }
        public IEnumerable<RankingEntry> Ranking { get; set; }
    }
}
