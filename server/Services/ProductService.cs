using server.Domain;
using server.Repositories;
using System.Collections.Generic;

namespace server.Services
{
    /// <summary>
    /// 
    /// </summary>
    public class ProductService : IProductService
    {
        IProductRepository _productRepository;
        public ProductService(IProductRepository productRepository) { 
            _productRepository = productRepository;
        }

        public List<Product> GetProductList()
        {
            return _productRepository.GetAllProducts();
        }

        public List<Product> SearchProducts(List<int> Ids)
        {
            return _productRepository.GetProductsByIds(Ids);
        }

        public Product GetProductDetails(int Id)
        {
            return _productRepository.GetProductById(Id);
        }
    }
}
