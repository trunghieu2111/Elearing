using Home.Elearning.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Home.Elearning.Permissions
{
    public class ElearningPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(ElearningPermissions.GroupName);
            //Define your own permissions here. Example:
            //myGroup.AddPermission(ElearningPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<ElearningResource>(name);
        }
    }
}
