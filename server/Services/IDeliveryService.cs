using server.Domain;
using System.Collections.Generic;

namespace server.Services
{
    public interface IDeliveryService
    {
        public decimal CalculateDelivery(Cart cart); 
    }
}