using Entities;
using MyDatabase;
using Repositories.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using MyDatabase;

namespace Repositories.Persistance.Repositories
{
    public class ProductRepository : GenericRepository<Product>, IProductRepository
    {
        public ProductRepository(ApplicationDbContext context) : base(context)
        {

        }

        public IEnumerable<Product> GetAllProductsWithShop()
        {

            var productsWithShop = db.Products.Include(x => x.Shop);
            return productsWithShop;
            
            
            
        }
    }
}
