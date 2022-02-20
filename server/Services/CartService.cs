using server.Domain;

namespace server.Services
{
    public class CartService : ICartService
    {

        public decimal CalculateItemTotalCost(CartItem item, decimal exchangeRate)
        {
            return item.Count * (item.Product.Price * exchangeRate);
        }
    }
}
