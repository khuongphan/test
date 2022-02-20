using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server.Domain;
using server.Repositories;
using server.Services;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Net;

namespace server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductService _productService;
        private readonly ICountryRepository _countryRepository;
        public ProductsController(IProductService productService, ICountryRepository countryRepository)
        {
            _productService = productService;
            _countryRepository = countryRepository;
        }

        [HttpGet()]
        public IActionResult GetProductList([FromQuery] string countryCode)
        {
            if (string.IsNullOrEmpty(countryCode))
                countryCode = "AUST";
            var country = _countryRepository.GetCountry(countryCode);
            if (country == null) _countryRepository.GetCountry("AUST");

            var productsList = _productService.GetProductList();
            productsList.ForEach(product => {
                product.Price = product.Price * country.ExchangeRate;
            });

            return new JsonResult(_productService.GetProductList());
        }
    }
}
