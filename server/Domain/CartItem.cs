namespace server.Domain
{
    public class CartItem
    {
        public Product Product { get; set; }
        public int Count { get; set; }
        public decimal TotalCost { get; set; }
    }
}
