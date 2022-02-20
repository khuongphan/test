using server.Domain;

namespace server.Services
{
    public interface ICartService
    {
        public decimal CalculateItemTotalCost(CartItem item, decimal exchangeRate);
    }
}
