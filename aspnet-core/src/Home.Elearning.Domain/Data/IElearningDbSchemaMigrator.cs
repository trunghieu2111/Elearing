using System.Threading.Tasks;

namespace Home.Elearning.Data
{
    public interface IElearningDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
