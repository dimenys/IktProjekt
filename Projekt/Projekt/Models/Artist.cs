using System;
using System.Collections.Generic;

namespace Projekt.Models;

public partial class Artist
{
    public int ArtistId { get; set; }

    public string? ArtistName { get; set; }

    public string? Origin { get; set; }

    public int? NumberOfWorks { get; set; }

    public string? ActiveStatus { get; set; }
}
