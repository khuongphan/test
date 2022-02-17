using server.Domain;
using System.Collections.Generic;

namespace server.Repositories
{
    public interface IProductRepository
    {
        public List<Product> GetAllProducts();
        public Product GetProductById(int id);
        public Product GetProductByName(string name);
        public List<Product> GetProductsByIds(List<int> Ids);
        public List<Product> GetProductsByNames(List<string> names);
    }
}