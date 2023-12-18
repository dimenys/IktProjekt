using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Projekt.Models;

public partial class EloadokContext : DbContext
{
    public EloadokContext()
    {
    }

    public EloadokContext(DbContextOptions<EloadokContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Artist> Artists { get; set; }

    public virtual DbSet<Artistgenre> Artistgenres { get; set; }

    public virtual DbSet<Genre> Genres { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySQL("SERVER=localhost;PORT=3306;DATABASE=eloadok;USER=root;PASSWORD=;SSL MODE=none;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Artist>(entity =>
        {
            entity.HasKey(e => e.ArtistId).HasName("PRIMARY");

            entity.ToTable("artists");

            entity.Property(e => e.ArtistId)
                .HasColumnType("int(11)")
                .HasColumnName("ArtistID");
            entity.Property(e => e.ActiveStatus)
                .HasMaxLength(10)
                .HasDefaultValueSql("'NULL'");
            entity.Property(e => e.ArtistName)
                .HasMaxLength(100)
                .HasDefaultValueSql("'NULL'");
            entity.Property(e => e.NumberOfWorks)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)");
            entity.Property(e => e.Origin)
                .HasMaxLength(50)
                .HasDefaultValueSql("'NULL'");
        });

        modelBuilder.Entity<Artistgenre>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("artistgenres");

            entity.HasIndex(e => e.ArtistId, "ArtistID");

            entity.HasIndex(e => e.GenreId, "GenreID");

            entity.Property(e => e.ArtistId)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)")
                .HasColumnName("ArtistID");
            entity.Property(e => e.GenreId)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)")
                .HasColumnName("GenreID");

            entity.HasOne(d => d.Artist).WithMany()
                .HasForeignKey(d => d.ArtistId)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("artistgenres_ibfk_1");

            entity.HasOne(d => d.Genre).WithMany()
                .HasForeignKey(d => d.GenreId)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("artistgenres_ibfk_2");
        });

        modelBuilder.Entity<Genre>(entity =>
        {
            entity.HasKey(e => e.GenreId).HasName("PRIMARY");

            entity.ToTable("genres");

            entity.Property(e => e.GenreId)
                .HasColumnType("int(11)")
                .HasColumnName("GenreID");
            entity.Property(e => e.Description)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("text");
            entity.Property(e => e.GenreName)
                .HasMaxLength(50)
                .HasDefaultValueSql("'NULL'");
            entity.Property(e => e.ProminentExamples)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("text");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
