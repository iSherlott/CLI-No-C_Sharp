using System.Linq.Expressions;

namespace Domain.Repositories.Contracts
{
	public interface IRepositoryBase<T> where T : class
	{
		Task<List<T>> GetAllAsync();
		Task<List<T>> GetAllByParamsAsync(Expression<Func<T, bool>> expression);
		Task<T> GetByIdAsync(params object[] value);
		Task<T> GetByParamsAsync(Expression<Func<T, bool>> expression);
		Task<T> PostAsync(T entity);
		Task<T> UpdateAsync(T entity);
		Task<List<T>> PostRangeAsync(List<T> entityList);
		void DeleteObject(T entity);
		void Delete(params object[] value);
		void SaveChanges();
	}
}
