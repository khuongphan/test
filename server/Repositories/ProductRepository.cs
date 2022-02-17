using server.Domain;
using System.Collections.Generic;

namespace server.Repositories
{
    public class ProductRepository : IProductRepository
    {
        public static List<Product> products = new List<Product>() {
                new Product { Id = 1, Name = "Audi A7" },
                new Product { Id = 2, Name = "Toyota Camry" },
                new Product { Id = 3, Name = "BWM 535" },
                new Product { Id = 4, Name = "Honda Accord" },
                new Product { Id = 5, Name = "Mazda CX-5"}
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
