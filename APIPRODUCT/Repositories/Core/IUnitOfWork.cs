﻿using Repositories.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Core
{
    public interface IUnitOfWork : IDisposable
    {
        IProductRepository Products { get; }

        IShopRepository Shops { get; }

        int Complete();
    }
}
