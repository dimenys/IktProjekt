using Microsoft.EntityFrameworkCore;

namespace Projekt.Models
{
    public class ArtistContext:DbContext
    {
        public ArtistContext() { }
        public ArtistContext(DbContextOptions options) : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseMySql("server=localhost; database=eloadok; user=root; password=", ServerVersion.AutoDetect("server=localhost; database=eloadok; user=root; password="));
            }
        }

        //public DbSet<Artist> Artists { get; set; } = null!;
    }
}
