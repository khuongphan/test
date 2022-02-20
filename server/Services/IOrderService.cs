using server.Domain;

namespace server.Services
{
    public interface IOrderService
    {
        public int PlaceOrder(Cart cart);
    }
}