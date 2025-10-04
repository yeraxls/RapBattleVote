using Microsoft.AspNetCore.Mvc;
using RapBattles.Models;
using RapBattleVote.Models;

namespace RapBattles.Controllers
{
    [Route("api/[controller]")]
    public class VoteController : Controller
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

        [HttpPost("vote")]
        public IActionResult Vote([FromBody] NewVote vote)
        {
            try
            {
                if (vote == null)
                    return BadRequest("Voto inválido.");

                if (vote.BattleId <= 0)
                    return BadRequest("El ID de la batalla no es válido.");

                if (string.IsNullOrWhiteSpace(vote.Rapper))
                    return BadRequest("Debe especificarse el rapero por el que se vota.");

                // Aquí simularíamos guardar el voto en base de datos
                // Ejemplo: _context.Votes.Add(new VoteEntity { BattleId = vote.BattleId, Rapper = vote.Rapper });
                // _context.SaveChanges();

                return Ok($"Voto registrado para '{vote.Rapper}' en la batalla {vote.BattleId}");
            }
            catch (Exception)
            {
                return BadRequest("Error al registrar el voto.");
            }
        }
    }
}
