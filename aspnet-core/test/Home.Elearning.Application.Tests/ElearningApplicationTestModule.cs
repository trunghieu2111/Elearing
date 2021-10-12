using Volo.Abp.Modularity;

namespace Home.Elearning
{
    [DependsOn(
        typeof(ElearningApplicationModule),
        typeof(ElearningDomainTestModule)
        )]
    public class ElearningApplicationTestModule : AbpModule
    {

    }
}