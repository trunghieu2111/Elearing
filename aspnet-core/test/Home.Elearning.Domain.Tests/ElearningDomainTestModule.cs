using Home.Elearning.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace Home.Elearning
{
    [DependsOn(
        typeof(ElearningEntityFrameworkCoreTestModule)
        )]
    public class ElearningDomainTestModule : AbpModule
    {

    }
}