using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace Home.Elearning
{
    [Dependency(ReplaceServices = true)]
    public class ElearningBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "Elearning";
    }
}
