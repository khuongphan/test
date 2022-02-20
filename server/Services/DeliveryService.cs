using server.Domain;
using server.Repositories;
using System.Collections.Generic;

namespace server.Services
{
    public class DeliveryService: IDeliveryService
    {
        ICountryRepository _countryRepository;

        public DeliveryService(ICountryRepository countryService)
        {
            _countryRepository = countryService;
        }

        public decimal CalculateDelivery(Cart cart) { 
            decimal cost = 0;

            var country = _countryRepository.GetCountry(cart.Country.Code);
            if (country == null) country = _countryRepository.GetCountry("AUST");
            
            if (cart.Items.Count == 0) 
                return cost;

            foreach (CartItem item in cart.Items)
            {
                cost += (item.Product.Price * item.Count);
            }

            if (cost <= 50.0M) 
                return (10.0M * country.ExchangeRate);
            else 
                return (20.0M * country.ExchangeRate);
        }
    }
}
