namespace Projekt.Models.Dtos
{
    public class Dtos
    {
        public record ArtistDto(int ArtistID, string ArtistName, string Origin, int NumberOfWorks, string ActiveStatus);
        public record CreatedArtistDto(int ArtistId, int NumberOfWorks, string ActiveStatus);
        public record UpdateArtistDto(int NumberOfWorks, string ActiveStatus);
    }
}
