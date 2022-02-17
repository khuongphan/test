using server.Domain;
using System.Collections.Generic;

namespace server.Services
{
    public interface IProductService
    {
        public List<Product> GetProductList();

        public List<Product> SearchProducts(List<int> Ids);

        public Product GetProductDetails(int Id);

    }
}