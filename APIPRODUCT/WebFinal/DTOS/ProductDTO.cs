using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebFinal.DTOS
{
    public class ProductDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public int Quantity { get; set; }
        public object Shop { get; set; }
    }
}