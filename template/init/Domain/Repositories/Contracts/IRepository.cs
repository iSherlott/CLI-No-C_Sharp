
public interface IRepository<TEntity>
{
    Task PostAsync(TEntity entity);
    void Update(TEntity entity);
    Task<IEnumerable<TEntity>> GetAllAsync();
    Task<TEntity> GetByIdAsync(Guid id);
    Task DeleteAsync(Guid id);
    void Delete(TEntity entity);
    Task SaveAsync();
}