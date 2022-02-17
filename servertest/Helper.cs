using Microsoft.Extensions.DependencyInjection;
using server.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace servertest
{
    public static class Helper
    {
        private static IServiceProvider GetServiceProvider()
        {
            var services = new ServiceCollection();
            services.AddScoped<IProductRepository, ProductRepository>();

            return services.BuildServiceProvider();            
        }

        public static T GetService<T>()
        {
            var provider = GetServiceProvider(); 
            return provider.GetRequiredService<T>();
        }
    }
}
