namespace RapBattles.Models
{
    public class Battle
    {
        public int Id { get; set; }
        public string Title { get; set; }         // Título de la batalla
        public string Description { get; set; }   // Descripción breve
        public string Rapper1 { get; set; }       // Nombre del rapero 1
        public string Rapper2 { get; set; }       // Nombre del rapero 2
        public string VideoUrl { get; set; }      // URL del video o audio
        public DateTime Date { get; set; }        // Fecha de la batalla
    }
}
