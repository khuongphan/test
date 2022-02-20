using server.Domain;
using System.Collections.Generic;

namespace server.Repositories
{
    public interface ICountryRepository
    {
        public List<Country> GetAllCountries();

        public Country GetCountry(string countryCode);
    }
}