using System;
using System.Collections.Generic;
using System.Text;
using Home.Elearning.Localization;
using Volo.Abp.Application.Services;

namespace Home.Elearning
{
    /* Inherit your application services from this class.
     */
    public abstract class ElearningAppService : ApplicationService
    {
        protected ElearningAppService()
        {
            LocalizationResource = typeof(ElearningResource);
        }
    }
}
