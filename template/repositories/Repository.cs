using Domain.Entities;
using Domain.Repositories;
using Infrastructure.Data;
using Infrastructure.Repositories.Contrats;

namespace Infrastructure.Repositories
{
    public class {{name}}Repository :
        RepositoryBase<{{name}}Entity>,
        I{{name}}Repository
    {
        public {{name}}Repository(ApplicationDbContext context, bool SaveChanges = true) : base(context, SaveChanges) { }
    }
}
