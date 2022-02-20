using System.Collections.Generic;

namespace server.Domain
{
    public class Cart
    {
        public int Id { get; set; }
        public List<CartItem> Items { get; set; }

        public Country Country { get; set; }

        public decimal DeliveryCost { get; set; }
    }
}
