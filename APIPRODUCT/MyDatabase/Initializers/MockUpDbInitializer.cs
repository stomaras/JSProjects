using Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyDatabase.Initializers
{
    public class MockUpDbInitializer : DropCreateDatabaseAlways<ApplicationDbContext>
    {
        protected override void Seed(ApplicationDbContext context)
        {
            Product p1 = new Product() { Name = "Samsung", Price=230,Quantity=4 };
            Product p2 = new Product() { Name = "IPhone", Price=230,Quantity=4 };
            Product p3 = new Product() { Name = "Nokia", Price=250, Quantity=45 };
            Product p4 = new Product() { Name = "Smart Phone", Price=1000, Quantity=45 };
            Product p5 = new Product() { Name = "Hawaei", Price=400, Quantity=100 };
            Product p6 = new Product() { Name = "Nokia 9", Price=250, Quantity=78 };
            Product p7 = new Product() { Name = "NoK", Price=250, Quantity=78 };
            Product p8 = new Product() { Name = "NoKi", Price=250, Quantity=78 };
            Product p9 = new Product() { Name = "Samsung Galaxy", Price=250, Quantity=78 };
            Product p10 = new Product() { Name = "IPhone 9", Price=500, Quantity=78 };
            Product p11 = new Product() { Name = "IPhone 11", Price=500, Quantity=78 };
            Product p12 = new Product() { Name = "Phone 11", Price=500, Quantity=78 };

            context.Products.AddOrUpdate(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12);


            Shop s1 = new Shop() { Address = "Greece", Title = "Plaisio" };
            Shop s2 = new Shop() { Address = "USA", Title = "Amazon" };
            Shop s3 = new Shop() { Address = "France", Title = "le coq sportif" };
            context.Shops.AddOrUpdate(s1, s2, s3);


            //p1.Shop = s1;
            //p2.Shop = s1;
            //p3.Shop = s1;
            //p4.Shop = s2;
            //p4.Shop = s2;
            //p5.Shop = s3;
            s1.Products.Add(p1);
            s1.Products.Add(p2);
            s1.Products.Add(p3);


            s2.Products.Add(p4);
            s2.Products.Add(p5);

            s3.Products.Add(p6);
            s3.Products.Add(p7);
            s3.Products.Add(p8);
            s3.Products.Add(p9);
            s3.Products.Add(p10);
            s3.Products.Add(p11);
            s3.Products.Add(p12);


            context.Shops.AddOrUpdate(s1, s2, s3);

            context.Products.AddOrUpdate(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12);




            base.Seed(context);
        }

    }


}
