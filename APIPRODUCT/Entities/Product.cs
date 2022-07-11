using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Product : SuperMarket
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public int Quantity { get; set; }


        // Foreign Key
        public int? ShopId { get; set; }


        // Navigation Properties
        public Shop Shop { get; set; }
    }
}
