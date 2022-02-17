using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server.Domain;
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
        public ProductsController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public IActionResult GetProductList()
        {
            return new JsonResult(_productService.GetProductList());
        }

        [HttpGet("{id}")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        [Consumes("application/json")]
        public IActionResult GetProduct([Required] string Id)
        {
            int id;
            if (!int.TryParse(Id, out id)) 
                return BadRequest("Invalid product id");

            var product = _productService.GetProductDetails(id);

            if (product == null) 
                return NotFound("Cannot find product");

            return new JsonResult(product);
        }

    }
}
