using Microsoft.AspNetCore.Mvc;
using RapBattles.Models;

namespace RapBattles.Controllers
{
    [Route("api/[controller]")]
    public class BattleController : Controller
    {
        // Datos de ejemplo
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

        // GET: /Battle/List
        [HttpGet]
        public IActionResult List()
        {
            return View(_battles);
        }

        [HttpPost("new-battle")]
        public IActionResult CreateBattle([FromBody] Battle battle)
        {
            try
            {

            if (battle == null)
                return BadRequest("Datos inválidos.");

            // Aquí podrías hacer validaciones extra si quieres
            if (string.IsNullOrWhiteSpace(battle.Title))
                return BadRequest("El título es obligatorio.");

                // Ejemplo: guardar en base de datos (mock de momento)
                // _context.Battles.Add(new BattleEntity { ... });
                // _context.SaveChanges();

                // Devuelves la batalla creada
                return Ok("batalla " + battle.Title + " guardada con éxito");
            }
            catch
            {
                return BadRequest("Error al guardar la batalla");
            }
        }

        // POST: /Battle/Vote
        [HttpPost]
        public IActionResult Vote(int battleId, string voteFor)
        {
            // Simular agregar voto
            var entry = _ranking.FirstOrDefault(r => r.RapperName == voteFor);
            if (entry != null)
                entry.Votes++;

            TempData["Message"] = $"¡Has votado por {voteFor}!";
            return RedirectToAction("Index", "Home");
        }

        // GET: /Battle/Ranking
        [HttpGet]
        public IActionResult Ranking()
        {
            var sortedRanking = _ranking.OrderByDescending(r => r.Votes).ToList();
            return View(sortedRanking);
        }
    }
}
