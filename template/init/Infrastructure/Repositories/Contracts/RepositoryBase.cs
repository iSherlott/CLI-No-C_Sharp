using System.Linq.Expressions;
using Infrastructure.Data;
using Domain.Repositories.Contracts;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories.Contrats
{
    public class RepositoryBase<T> : IRepositoryBase<T>, IDisposable where T : class
    {
        protected readonly ApplicationDbContext _context;
        protected bool _SaveChanges = true;
        public RepositoryBase(ApplicationDbContext context, bool saveChanges = true)
        {
            _context = context;
            _SaveChanges = saveChanges;
        }
        public async Task<List<T>> GetAllAsync()
        {
            return await _context.Set<T>().ToListAsync();
        }
        public async Task<List<T>> GetAllByParamsAsync(Expression<Func<T, bool>> expression)
        {
            return await _context.Set<T>().Where(expression).ToListAsync();
        }
        public async Task<T> GetByIdAsync(params object[] value)
        {
            return await _context.Set<T>().FindAsync(value);
        }

        public async Task<T> GetByParamsAsync(Expression<Func<T, bool>> expression)
        {
            return await _context.Set<T>().FirstOrDefaultAsync(expression);
        }

        public async Task<T> PostAsync(T entity)
        {
            _context.Set<T>().Add(entity);

            if (_SaveChanges)
                _context.SaveChanges();

            return entity;
        }

        public async Task<List<T>> PostRangeAsync(List<T> entityList)
        {
            await _context.Set<T>().AddRangeAsync(entityList);

            if (_SaveChanges)
                _context.SaveChanges();

            return entityList;

        }
        public async Task<T> UpdateAsync(T entity)
        {
            _context.Entry(entity).State = EntityState.Modified;

            if (_SaveChanges)
                _context.SaveChanges();

            return entity;

        }
        public void Delete(params object[] value)
        {
            var obj = GetByIdAsync(value).Result;
            DeleteObject(obj);
        }
        public void DeleteObject(T entity)
        {
            _context.Set<T>().Remove(entity);

            if (_SaveChanges)
                _context.SaveChanges();
        }
        public void SaveChanges() => _context.SaveChanges();
        public void Dispose() => _context.Dispose();
    }
}
