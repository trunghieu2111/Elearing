using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Home.Elearning.Data;
using Volo.Abp.DependencyInjection;

namespace Home.Elearning.EntityFrameworkCore
{
    public class EntityFrameworkCoreElearningDbSchemaMigrator
        : IElearningDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreElearningDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the ElearningDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<ElearningDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}
