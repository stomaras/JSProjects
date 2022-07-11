using MyDatabase;
using Repositories.Persistance;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebFinal.Controllers.APIControllers
{
    public class BaseClassController : Controller
    {
        protected ApplicationDbContext db = new ApplicationDbContext();
        protected UnitOfWork superMarket;

        public BaseClassController()
        {
            superMarket = new UnitOfWork(db);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                superMarket.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}