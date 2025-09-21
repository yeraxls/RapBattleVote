namespace RapBattles.Models
{
    public class Vote
    {
        public int Id { get; set; }
        public int BattleId { get; set; }       // ID de la batalla votada
        public string UserId { get; set; }      // ID del usuario que vota
        public string VoteFor { get; set; }     // Rapero elegido (Rapper1 o Rapper2)
        public DateTime VoteDate { get; set; }  // Fecha del voto
    }
}
