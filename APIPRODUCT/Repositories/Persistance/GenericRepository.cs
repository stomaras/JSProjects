using Entities;
using MyDatabase;
using Repositories.Core;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Persistance
{
    public class GenericRepository<T> : IGenericRepository<T> where T : SuperMarket
    {

        public ApplicationDbContext db;
        public DbSet<T> table;

        public GenericRepository(ApplicationDbContext context)
        {
            db = context;
            table = db.Set<T>();
        }
        public void Delete(object id)
        {
            T existing = table.Find(id);
            table.Remove(existing);
        }

        public IEnumerable<T> GetAll()
        {
            return table.ToList();
        }

        public T GetById(object id)
        {
            return table.Find(id);
        }

        public void Insert(T obj)
        {
            table.Add(obj);
        }

        public void Save()
        {
            db.SaveChanges();
        }

        public void Update(T obj)
        {
            table.Attach(obj);
            db.Entry(obj).State = EntityState.Modified;
        }
    }
}
