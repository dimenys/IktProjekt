using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Projekt.Models;
using Projekt.Models.Dtos;
using static Projekt.Dtos;

namespace Projekt.Controllers
{
    [Route("artists")]
    [ApiController]
    public class ArtistController : ControllerBase
    {
        private ResponseResult response;
        public ArtistController()
        {
            response = new();
        }

        [HttpGet]
        public ActionResult<IEnumerable<Artist>> Get()
        {
            using (var context = new ArtistDbContext())
            {

                var result = context.artists.ToList();
                if (result == null)
                {
                    response.Message = "Sikertelen lekérdezés";
                    return BadRequest(response);
                }
                else
                {
                    response.Result = result;
                    response.IsSuccess = true;
                    response.Message = "Sikeres lekérdezés";
                    return Ok(response);
                }

            }

        }

        [HttpGet("{id}")]
        public ActionResult<Artist> GetById(int Id)
        {
            using (var context = new ArtistDbContext())
            {
                var result = context.artists.FirstOrDefault(x => x.ArtistId == Id);
                if (result == null)
                {
                    response.Message = "Sikertelen lekérdezés";
                    return BadRequest(response);
                }
                else
                {
                    response.Result = result;
                    response.IsSuccess = true;
                    response.Message = "Sikeres lekérdezés";
                    return Ok(response);
                }

            }

        }

        [HttpPost]
        public ActionResult<Artist> Post(CreateArtistDto createArtistDto)
        {
            var artist = new Artist
            {
                ArtistName = createArtistDto.ArtistName,
                Origin = createArtistDto.Origin,
                ActiveStatus = createArtistDto.ActiveStatus,
                NumberOfWorks = createArtistDto.NumberOfWorks,
                
                /*Id = Guid.NewGuid()*/
            };

            using (var context = new ArtistDbContext())
            {
                if (artist == null)
                {
                    response.Message = "Sikertelen hozzáadás";
                    return BadRequest(response);
                }
                else
                {
                    context.artists.Add(artist);
                    context.SaveChanges();
                    response.Result = artist;
                    response.IsSuccess = true;
                    response.Message = "Sikeres hozzáadás";
                    return StatusCode(201, response);
                }

            }

        }

        [HttpPut("{id}")]
        public ActionResult<Artist> Put(int Id, UpdateArtistDto updateArtistDto)
        {
            using (var context = new ArtistDbContext())
            {
                var existingArtist = context.artists.FirstOrDefault(x => x.ArtistId == Id);
                if (existingArtist == null)
                {
                    response.Message = "Sikertelen frissítés";
                    return BadRequest(response);
                }
                else
                {
                    existingArtist.ArtistName = updateArtistDto.ArtistName;
                    existingArtist.Origin = updateArtistDto.Origin;
                    existingArtist.ActiveStatus = updateArtistDto.ActiveStatus;
                    existingArtist.NumberOfWorks = updateArtistDto.NumberOfWorks;
                    
                    context.artists.Update(existingArtist);
                    context.SaveChanges();
                    response.Result = existingArtist;
                    response.IsSuccess = true;
                    response.Message = "Sikeres frissítés";
                    return Ok(response);
                }

            }
        }

        [HttpDelete("{id}")]
        public ActionResult<Artist> Delete(int Id)
        {
            using (var context = new ArtistDbContext())
            {
                var result = context.artists.FirstOrDefault(x => x.ArtistId == Id);
                if (result == null)
                {
                    response.Message = "Sikertelen törlés";
                    return BadRequest(response);
                }
                else
                {
                    context.artists.Remove(result);
                    context.SaveChanges();

                    response.Result = result;
                    response.IsSuccess = true;
                    response.Message = "Sikeres törlés";
                    return Ok(response);
                }

            }

        }
    }
}
