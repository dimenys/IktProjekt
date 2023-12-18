using System;
using System.Collections.Generic;

namespace Projekt.Models;

public partial class Artistgenre
{
    public int? ArtistId { get; set; }

    public int? GenreId { get; set; }

    public virtual Artist? Artist { get; set; }

    public virtual Genre? Genre { get; set; }
}
