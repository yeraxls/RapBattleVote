using Microsoft.AspNetCore.Mvc;
using RapBattles.Models;

namespace RapBattles.Controllers
{
    public class HomeController : Controller
    {
        private static List<Battle> _battles = new List<Battle>
        {
            new Battle { Id = 1, Title = "Batalla Urbana 1", Description = "Duelo entre MC Alpha y MC Beta", Rapper1 = "MC Alpha", Rapper2 = "MC Beta", VideoUrl = "/videos/battle1.mp4", Date = DateTime.Now.AddDays(-3) },
            new Battle { Id = 2, Title = "Batalla Urbana 2", Description = "Duelo entre MC Gamma y MC Delta", Rapper1 = "MC Gamma", Rapper2 = "MC Delta", VideoUrl = "/videos/battle2.mp4", Date = DateTime.Now.AddDays(-1) }
        };

        private static List<RankingEntry> _ranking = new List<RankingEntry>
        {
            new RankingEntry { RapperName = "MC Alpha", Votes = 5 },
            new RankingEntry { RapperName = "MC Beta", Votes = 3 },
            new RankingEntry { RapperName = "MC Gamma", Votes = 4 },
            new RankingEntry { RapperName = "MC Delta", Votes = 2 }
        };
        public IActionResult Index()
        {
            var model = new HomeIndexViewModel
            {
                Battles = _battles,
                Ranking = _ranking.OrderByDescending(r => r.Votes).ToList()
            };
            return View(model);
        }
    }
}
