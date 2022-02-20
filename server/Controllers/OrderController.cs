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
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;
        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpPost("place")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        [Consumes("application/json")]
        public IActionResult CalculateDelivery(Cart cart)
        {
            var result = _orderService.PlaceOrder(cart);
            return new JsonResult(result);
        }
    }
}
