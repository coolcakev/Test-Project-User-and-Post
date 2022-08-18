using Data_Access.Interfaces;
using Domain.Common;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Data_Access.Repositories
{
    public class GenericRepository<T> : IGenericRepository<T> where T : BaseEntities
    {
        protected ApplicationContext _context { get; set; }
        private DbSet<T> table = null;
        public GenericRepository(ApplicationContext _context)
        {
            this._context = _context;
            table = _context.Set<T>();
        }
        public Task<List<T>> Get(Expression<Func<T, bool>> filter)
        {
            IQueryable<T> query = table;
            query = query.Where(filter);
            return query.ToListAsync();
        }
        public Task<List<T>> GetAll()
        {
            return table.ToListAsync();
        }
        public Task<List<T>> GetAllWithInclude(Func<IQueryable<T>, IIncludableQueryable<T, object>> include = null)
        {
            IQueryable<T> query = table;
            query = include(query);
            return query.ToListAsync();
        }
        public Task<T> GetById(object id)
        {
            return table.FindAsync(id).AsTask();
        }
        public Task<T> GetByIdWithInclude(int id, Func<IQueryable<T>, IIncludableQueryable<T, object>> include)
        {
            IQueryable<T> query = table;

            query = include(query);

            return query.FirstOrDefaultAsync(x => x.Id == id);
        }
        public Task Insert(T obj)
        {
            return table.AddAsync(obj).AsTask();
        }
        public void Update(T obj)
        {
            table.Attach(obj);
            _context.Entry(obj).State = EntityState.Modified;
        }
        public void Delete(T obj)
        {
            table.Remove(obj);
        }
        public async Task<bool> DeleteById(object id)
        {
            var obj = await table.FindAsync(id);
            //var temp= _context.Entry(obj).References;
            //foreach (var item in temp)
            //{
            //   item.LoadAsync()
            //}
            if (obj == null)
            {
                return false;
            }
            table.Remove(obj);
            return true;
        }
        public Task Save()
        {
            return _context.SaveChangesAsync();
        }

        public Task<List<T>> GetOrdered(
            Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null,
            Expression<Func<T, bool>> filter = null,
             Func<IQueryable<T>, IIncludableQueryable<T, object>> include = null)
        {
            IQueryable<T> query = _context.Set<T>();

            if (include != null)
            {
                query = include(query);
            }

            if (filter != null)
            {
                query = query.Where(filter);
            }

            if (orderBy != null)
            {
                query = orderBy(query);

            }

            return query.ToListAsync();
        }
        public async Task<(List<T> entities, int total)> GetFilteredWithTotalSum(int page = 0, int count = 0,
            Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null,
            Expression<Func<T, bool>> filter = null,
            Func<IQueryable<T>, IIncludableQueryable<T, object>> include = null)
        {
            IQueryable<T> query = _context.Set<T>();

            if (include != null)
            {
                query = include(query);
            }

            if (filter != null)
            {
                query = query.Where(filter);
            }

            if (orderBy != null)
            {
                query = orderBy(query);

            }

            var entitiesCount = await query.CountAsync();

            if (count != 0)
            {
                query = query.Skip(page * count).Take(count);
            }

            return (await query.ToListAsync(), entitiesCount);
        }
        public async Task<(List<T> entities, int total)> GetFilteredWithTotalSumWithQurable(IQueryable<T> query, int page = 0, int count = 0,
           Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null,
           Func<IQueryable<T>, IIncludableQueryable<T, object>> include = null)
        {

            if (include != null)
            {
                query = include(query);
            }

            if (orderBy != null)
            {
                query = orderBy(query);

            }

            var entitiesCount = await query.CountAsync();

            if (count != 0)
            {
                query = query.Skip(page * count).Take(count);
            }

            return (await query.ToListAsync(), entitiesCount);
        }
    }
}
