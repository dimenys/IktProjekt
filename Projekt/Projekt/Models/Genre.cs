using System;
using System.Collections.Generic;

namespace Projekt.Models;

public partial class Genre
{
    public int GenreId { get; set; }

    public string? GenreName { get; set; }

    public string? Description { get; set; }

    public string? ProminentExamples { get; set; }
}
