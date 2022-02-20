using server.Domain;
using System.Collections.Generic;

namespace server.Repositories
{
    public class ProductRepository : IProductRepository
    {
        public static List<Product> products = new List<Product>() {
                new Product { Id = 1, Name = "Audi A7" , Price = 10.5M},
                new Product { Id = 2, Name = "Toyota Camry", Price = 20.5M },
                new Product { Id = 3, Name = "BWM 535", Price = 24.2M },
                new Product { Id = 4, Name = "Honda Accord", Price = 14.6M },
                new Product { Id = 5, Name = "Mazda CX-5", Price = 12.7M }
            };

        public List<Product> GetAllProducts()
        {
            return products;
        }

        public Product GetProductById(int Id)
        {
            return products.Find(x => x.Id == Id);
        }

        public Product GetProductByName(string Name)
        {
            return products.Find(x => x.Name == Name);
        }

        public List<Product> GetProductsByNames(List<string> names)
        {
            if (names.Count == 0)
                return new List<Product>();
            return products.FindAll(x => names.Contains(x.Name));

        }
        public List<Product> GetProductsByIds(List<int> Ids)
        {
            if (Ids.Count == 0)
                return new List<Product>();
            return products.FindAll(x => Ids.Contains(x.Id));
        }
    }
}
