using Microsoft.Extensions.DependencyInjection;
using server.Repositories;
using server.Services;
using Xunit;

namespace servertest.Tests
{
    public class ProductServiceTest
    {
        private readonly IProductRepository _productRepository;

        public ProductServiceTest()
        {
            _productRepository = Helper.GetService<IProductRepository>();
        }

        [Fact]
        public void GetAllProducts_ShouldReturnAllProducts()
        {
            // Arrange
            var sut = new ProductService(_productRepository);
            // Act
            var products = sut.GetProductList();
            
            // Assert
            Assert.Equal(5, products.Count);
        }
    }
}
