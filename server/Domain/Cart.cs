using System.Collections.Generic;

namespace server.Domain
{
    public class Cart
    {
        public int Id { get; set; }
        public List<Product> Products { get; set; }
    }
}
