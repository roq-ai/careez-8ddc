interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: [],
  tenantRoles: ['Admin', 'Vehicle Owner', 'Team Member', 'Business Owner'],
  tenantName: 'Company',
  applicationName: 'careez',
  addOns: ['chat', 'notifications', 'file'],
};
