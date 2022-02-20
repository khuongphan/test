using Microsoft.AspNetCore.Mvc;
using server.Domain;
using server.Repositories;
using server.Services;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Net;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ICartService _cartService;
        private readonly IDeliveryService _deliveryService;
        private readonly ICountryRepository _countryRepository;

        public CartController(ICartService cartService, IDeliveryService deliveryService, ICountryRepository countryRepository)
        {
            _cartService = cartService;
            _deliveryService = deliveryService;
            _countryRepository = countryRepository;
        }

        [HttpPost("calculate")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        [Consumes("application/json")]
        public IActionResult GetProduct([Required] Cart cart)
        {
            var country = _countryRepository.GetCountry(cart.Country.Code);
            if (country == null)
                country = _countryRepository.GetCountry("AUST");

            cart.Items.ForEach(x => x.TotalCost = _cartService.CalculateItemTotalCost(x, country.ExchangeRate));
            cart.DeliveryCost = _deliveryService.CalculateDelivery(cart);
            return new JsonResult(cart);
        }
    }
}
