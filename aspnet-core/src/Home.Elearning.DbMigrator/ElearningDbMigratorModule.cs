using Home.Elearning.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace Home.Elearning.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(ElearningEntityFrameworkCoreModule),
        typeof(ElearningApplicationContractsModule)
        )]
    public class ElearningDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
