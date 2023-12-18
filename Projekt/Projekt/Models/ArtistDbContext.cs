using Microsoft.EntityFrameworkCore;

namespace Projekt.Models
{
    public class ArtistDbContext:DbContext
    {
        public ArtistDbContext()
        {
        }
        public ArtistDbContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseMySql("SERVER=localhost;PORT=3306;DATABASE=eloadok;USER=root;PASSWORD=;SSL MODE=none;", ServerVersion.AutoDetect("SERVER=localhost;PORT=3306;DATABASE=eloadok;USER=root;PASSWORD=;SSL MODE=none;"));
            }
        }

        public DbSet<Artist> artists { get; set; } = null!;
    }
}
