using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebFinal.Controllers
{
    public class ProductController : Controller
    {
        // GET: Product
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ProductChartBar()
        {
            return View();
        }
























        [ChildActionOnly]
        public ActionResult MyPartialViewAction()
        {
            return PartialView("~/Views/Home/_NavigationBar.cshtml");
        }
    }
}