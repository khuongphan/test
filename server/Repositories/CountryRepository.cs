using server.Domain;
using System.Collections.Generic;

namespace server.Repositories
{
    public class CountryRepository : ICountryRepository
    {
        private readonly List<Country> countries = new List<Country> { 
            new Country
            {
                Name = "Australia",
                ExchangeRate = 1.0M,
                Code = "AUST",
                Currency = "AUD"
            },
            new Country
            {
                Name = "New Zealand",
                ExchangeRate = 1.13M,
                Code = "NZ",
                Currency = "NZD"
            },
            new Country
            {
                Name = "United States",
                ExchangeRate = 0.67M,
                Code = "USA",
                Currency = "USD"
            }
        };
        public List<Country> GetAllCountries() { 
            return countries;
        }

        public Country GetCountry(string countryCode)
        {
            return countries.Find(x => x.Code == countryCode);
            
        }
    }
}
