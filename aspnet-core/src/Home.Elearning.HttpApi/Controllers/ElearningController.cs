using Home.Elearning.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace Home.Elearning.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class ElearningController : AbpController
    {
        protected ElearningController()
        {
            LocalizationResource = typeof(ElearningResource);
        }
    }
}