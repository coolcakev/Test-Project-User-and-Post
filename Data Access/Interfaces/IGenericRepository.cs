using Domain.Common;
using Microsoft.EntityFrameworkCore.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Data_Access.Interfaces
{
    public interface IGenericRepository<T> where T : BaseEntities
    {
        Task<List<T>> Get(Expression<Func<T, bool>> filter);
        Task<List<T>> GetOrdered(
            Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null,
            Expression<Func<T, bool>> filter = null,
             Func<IQueryable<T>, IIncludableQueryable<T, object>> include = null);
        Task<(List<T> entities, int total)> GetFilteredWithTotalSum(int page = 0, int count = 0,
            Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null,
            Expression<Func<T, bool>> filter = null,
            Func<IQueryable<T>, IIncludableQueryable<T, object>> include = null);
        Task<(List<T> entities, int total)> GetFilteredWithTotalSumWithQurable(IQueryable<T> query, int page = 0, int count = 0,
           Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null,         
           Func<IQueryable<T>, IIncludableQueryable<T, object>> include = null);

        Task<List<T>> GetAll();
        Task<List<T>> GetAllWithInclude(Func<IQueryable<T>, IIncludableQueryable<T, object>> include = null);
        Task<T> GetById(object id);
        Task<bool> DeleteById(object id);
        Task<T> GetByIdWithInclude(int id, Func<IQueryable<T>, IIncludableQueryable<T, object>> include);
        Task Insert(T obj);
        void Update(T obj);
        void Delete(T obj);
        Task Save();
    }
}
