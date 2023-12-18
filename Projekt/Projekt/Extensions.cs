using Projekt.Models;
using Projekt.Models.Dtos;
using System.Drawing;
using System.Xml.Linq;
using static Projekt.Dtos;

namespace Projekt
{
    public static class Extensions
    {
        public static ArtistDto AsDto(this Artist artisDto)
        {
            return new ArtistDto(artisDto.ArtistId, artisDto.ArtistName, artisDto.Origin, Convert.ToInt32(artisDto.NumberOfWorks), artisDto.ActiveStatus);
        }
    }
}
