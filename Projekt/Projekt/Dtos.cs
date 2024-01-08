namespace Projekt
{
    public class Dtos
    {
        public record ArtistDto(int ArtistID, string ArtistName, string Origin, int NumberOfWorks, string ActiveStatus);
        public record CreateArtistDto(int ArtistId, string ArtistName, string Origin, int NumberOfWorks, string ActiveStatus);
        public record UpdateArtistDto(string ArtistName, string Origin, int NumberOfWorks, string ActiveStatus);
    }
}
