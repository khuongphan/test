using server.Domain;
using server.Repositories;
using server.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace servertest.Tests
{
    public class DeliveryServiceTest
    {
        private readonly ICountryRepository _countryRepositor;

        public DeliveryServiceTest()
        {
            _countryRepositor = Helper.GetService<ICountryRepository>();
        }

        [Fact]
        public void CalculateDelivery_ShouldSuccess()
        {
            // Arrange
            var sut = new DeliveryService(_countryRepositor);
            var cart = new Cart()
            {
                Country = new Country() { Code = "USA" },
                Items = new List<CartItem>
                {
                    new CartItem()
                    {
                        Product = new Product() { Name = "", Price = 10.0M },
                        Count = 1,
                    },
                    new CartItem()
                    {
                        Product = new Product() { Name = "", Price = 20.0M },
                        Count = 2,
                    }
                }
            };

            // Act
            var delivery = sut.CalculateDelivery(cart);

            // Assert
            Assert.Equal(6.7M, delivery);
        }
    }
}
