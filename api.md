# Organizations

Types:

- <code><a href="./src/resources/organizations/organizations.ts">Organization</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationRetrieveResponse</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationListResponse</a></code>

Methods:

- <code title="post /v1/identity/organizations">client.organizations.<a href="./src/resources/organizations/organizations.ts">create</a>({ ...params }) -> Organization</code>
- <code title="get /v1/identity/organizations/{organizationId}">client.organizations.<a href="./src/resources/organizations/organizations.ts">retrieve</a>(organizationId) -> OrganizationRetrieveResponse</code>
- <code title="post /v1/identity/organizations/{organizationId}">client.organizations.<a href="./src/resources/organizations/organizations.ts">update</a>(organizationId, { ...params }) -> Organization</code>
- <code title="get /v1/identity/organizations">client.organizations.<a href="./src/resources/organizations/organizations.ts">list</a>({ ...params }) -> OrganizationListResponse</code>

## APIKeys

Types:

- <code><a href="./src/resources/organizations/api-keys/api-keys.ts">APIKeyCreateResponse</a></code>
- <code><a href="./src/resources/organizations/api-keys/api-keys.ts">APIKeyRetrieveResponse</a></code>
- <code><a href="./src/resources/organizations/api-keys/api-keys.ts">APIKeyUpdateResponse</a></code>
- <code><a href="./src/resources/organizations/api-keys/api-keys.ts">APIKeyListResponse</a></code>

Methods:

- <code title="post /v1/identity/organizations/{organizationId}/api-keys">client.organizations.apiKeys.<a href="./src/resources/organizations/api-keys/api-keys.ts">create</a>(organizationId, { ...params }) -> APIKeyCreateResponse</code>
- <code title="get /v1/identity/organizations/{organizationId}/api-keys/{apiKeyId}">client.organizations.apiKeys.<a href="./src/resources/organizations/api-keys/api-keys.ts">retrieve</a>(organizationId, apiKeyId) -> APIKeyRetrieveResponse</code>
- <code title="post /v1/identity/organizations/{organizationId}/api-keys/{apiKeyId}">client.organizations.apiKeys.<a href="./src/resources/organizations/api-keys/api-keys.ts">update</a>(organizationId, apiKeyId, { ...params }) -> APIKeyUpdateResponse</code>
- <code title="get /v1/identity/organizations/{organizationId}/api-keys">client.organizations.apiKeys.<a href="./src/resources/organizations/api-keys/api-keys.ts">list</a>(organizationId, { ...params }) -> APIKeyListResponse</code>
- <code title="delete /v1/identity/organizations/{organizationId}/api-keys/{apiKeyId}">client.organizations.apiKeys.<a href="./src/resources/organizations/api-keys/api-keys.ts">delete</a>(organizationId, apiKeyId) -> void</code>

### Permissions

Types:

- <code><a href="./src/resources/organizations/api-keys/permissions.ts">PermissionCreateResponse</a></code>
- <code><a href="./src/resources/organizations/api-keys/permissions.ts">PermissionRetrieveResponse</a></code>

Methods:

- <code title="post /v1/identity/organizations/{organizationId}/api-keys/{apiKeyId}/permissions">client.organizations.apiKeys.permissions.<a href="./src/resources/organizations/api-keys/permissions.ts">create</a>(organizationId, apiKeyId, { ...params }) -> PermissionCreateResponse</code>
- <code title="get /v1/identity/organizations/{organizationId}/api-keys/{apiKeyId}/permissions">client.organizations.apiKeys.permissions.<a href="./src/resources/organizations/api-keys/permissions.ts">retrieve</a>(organizationId, apiKeyId, { ...params }) -> PermissionRetrieveResponse</code>
- <code title="delete /v1/identity/organizations/{organizationId}/api-keys/{apiKeyId}/permissions/{permissionId}">client.organizations.apiKeys.permissions.<a href="./src/resources/organizations/api-keys/permissions.ts">delete</a>(organizationId, apiKeyId, permissionId) -> void</code>

## Projects

Types:

- <code><a href="./src/resources/organizations/projects.ts">Project</a></code>
- <code><a href="./src/resources/organizations/projects.ts">ProjectListResponse</a></code>

Methods:

- <code title="post /v1/identity/organizations/{organizationId}/projects">client.organizations.projects.<a href="./src/resources/organizations/projects.ts">create</a>(organizationId, { ...params }) -> Project</code>
- <code title="get /v1/identity/organizations/{organizationId}/projects">client.organizations.projects.<a href="./src/resources/organizations/projects.ts">list</a>(organizationId, { ...params }) -> ProjectListResponse</code>

## Invites

Types:

- <code><a href="./src/resources/organizations/invites/invites.ts">OrganizationInvite</a></code>
- <code><a href="./src/resources/organizations/invites/invites.ts">InviteCreateResponse</a></code>
- <code><a href="./src/resources/organizations/invites/invites.ts">InviteListResponse</a></code>

Methods:

- <code title="post /v1/identity/organizations/{organizationId}/invites">client.organizations.invites.<a href="./src/resources/organizations/invites/invites.ts">create</a>(organizationId, { ...params }) -> InviteCreateResponse</code>
- <code title="get /v1/identity/organizations/{organizationId}/invites">client.organizations.invites.<a href="./src/resources/organizations/invites/invites.ts">list</a>(organizationId, { ...params }) -> InviteListResponse</code>
- <code title="delete /v1/identity/organizations/{organizationId}/invites/{inviteId}">client.organizations.invites.<a href="./src/resources/organizations/invites/invites.ts">delete</a>(organizationId, inviteId) -> void</code>

### InviteOffers

Types:

- <code><a href="./src/resources/organizations/invites/invite-offers.ts">OrganizationInviteOffer</a></code>
- <code><a href="./src/resources/organizations/invites/invite-offers.ts">InviteOfferCreateResponse</a></code>

Methods:

- <code title="post /v1/identity/organizations/{organizationId}/invite-offers/{inviteId}">client.organizations.invites.inviteOffers.<a href="./src/resources/organizations/invites/invite-offers.ts">create</a>(organizationId, inviteId, { ...params }) -> unknown</code>
- <code title="get /v1/identity/organizations/{organizationId}/invite-offers/{inviteId}">client.organizations.invites.inviteOffers.<a href="./src/resources/organizations/invites/invite-offers.ts">retrieve</a>(organizationId, inviteId, { ...params }) -> OrganizationInviteOffer</code>

## Members

Types:

- <code><a href="./src/resources/organizations/members/members.ts">Member</a></code>
- <code><a href="./src/resources/organizations/members/members.ts">MemberListResponse</a></code>

Methods:

- <code title="get /v1/identity/organizations/{organizationId}/members/{memberId}">client.organizations.members.<a href="./src/resources/organizations/members/members.ts">retrieve</a>(organizationId, memberId) -> Member</code>
- <code title="post /v1/identity/organizations/{organizationId}/members/{memberId}">client.organizations.members.<a href="./src/resources/organizations/members/members.ts">update</a>(organizationId, memberId, { ...params }) -> Member</code>
- <code title="get /v1/identity/organizations/{organizationId}/members">client.organizations.members.<a href="./src/resources/organizations/members/members.ts">list</a>(organizationId, { ...params }) -> MemberListResponse</code>
- <code title="delete /v1/identity/organizations/{organizationId}/members/{memberId}">client.organizations.members.<a href="./src/resources/organizations/members/members.ts">delete</a>(organizationId, memberId) -> void</code>

### Permissions

Types:

- <code><a href="./src/resources/organizations/members/permissions.ts">MemberPermission</a></code>
- <code><a href="./src/resources/organizations/members/permissions.ts">PermissionListResponse</a></code>

Methods:

- <code title="post /v1/identity/organizations/{organizationId}/members/{memberId}/permissions">client.organizations.members.permissions.<a href="./src/resources/organizations/members/permissions.ts">create</a>(organizationId, memberId, { ...params }) -> MemberPermission</code>
- <code title="get /v1/identity/organizations/{organizationId}/members/{memberId}/permissions">client.organizations.members.permissions.<a href="./src/resources/organizations/members/permissions.ts">list</a>(organizationId, memberId, { ...params }) -> PermissionListResponse</code>
- <code title="delete /v1/identity/organizations/{organizationId}/members/{memberId}/permissions/{permissionId}">client.organizations.members.permissions.<a href="./src/resources/organizations/members/permissions.ts">delete</a>(organizationId, memberId, permissionId) -> void</code>

## Teams

Types:

- <code><a href="./src/resources/organizations/teams/teams.ts">Team</a></code>
- <code><a href="./src/resources/organizations/teams/teams.ts">TeamListResponse</a></code>

Methods:

- <code title="post /v1/identity/organizations/{organizationId}/teams">client.organizations.teams.<a href="./src/resources/organizations/teams/teams.ts">create</a>(organizationId, { ...params }) -> Team</code>
- <code title="get /v1/identity/organizations/{organizationId}/teams/{teamId}">client.organizations.teams.<a href="./src/resources/organizations/teams/teams.ts">retrieve</a>(organizationId, teamId) -> Team</code>
- <code title="post /v1/identity/organizations/{organizationId}/teams/{teamId}">client.organizations.teams.<a href="./src/resources/organizations/teams/teams.ts">update</a>(organizationId, teamId, { ...params }) -> Team</code>
- <code title="get /v1/identity/organizations/{organizationId}/teams">client.organizations.teams.<a href="./src/resources/organizations/teams/teams.ts">list</a>(organizationId, { ...params }) -> TeamListResponse</code>
- <code title="delete /v1/identity/organizations/{organizationId}/teams/{teamId}">client.organizations.teams.<a href="./src/resources/organizations/teams/teams.ts">delete</a>(organizationId, teamId) -> void</code>

### Members

Types:

- <code><a href="./src/resources/organizations/teams/members.ts">TeamMember</a></code>
- <code><a href="./src/resources/organizations/teams/members.ts">MemberListResponse</a></code>

Methods:

- <code title="post /v1/identity/organizations/{organizationId}/teams/{teamId}/members">client.organizations.teams.members.<a href="./src/resources/organizations/teams/members.ts">create</a>(organizationId, teamId, { ...params }) -> TeamMember</code>
- <code title="post /v1/identity/organizations/{organizationId}/teams/{teamId}/members/{memberId}">client.organizations.teams.members.<a href="./src/resources/organizations/teams/members.ts">update</a>(organizationId, teamId, memberId, { ...params }) -> TeamMember</code>
- <code title="get /v1/identity/organizations/{organizationId}/teams/{teamId}/members">client.organizations.teams.members.<a href="./src/resources/organizations/teams/members.ts">list</a>(organizationId, teamId, { ...params }) -> MemberListResponse</code>
- <code title="delete /v1/identity/organizations/{organizationId}/teams/{teamId}/members/{memberId}">client.organizations.teams.members.<a href="./src/resources/organizations/teams/members.ts">delete</a>(organizationId, teamId, memberId) -> void</code>

### Permissions

Types:

- <code><a href="./src/resources/organizations/teams/permissions.ts">TeamPermission</a></code>
- <code><a href="./src/resources/organizations/teams/permissions.ts">PermissionListResponse</a></code>

Methods:

- <code title="post /v1/identity/organizations/{organizationId}/teams/{teamId}/permissions">client.organizations.teams.permissions.<a href="./src/resources/organizations/teams/permissions.ts">create</a>(organizationId, teamId, { ...params }) -> TeamPermission</code>
- <code title="get /v1/identity/organizations/{organizationId}/teams/{teamId}/permissions">client.organizations.teams.permissions.<a href="./src/resources/organizations/teams/permissions.ts">list</a>(organizationId, teamId, { ...params }) -> PermissionListResponse</code>
- <code title="delete /v1/identity/organizations/{organizationId}/teams/{teamId}/permissions/{permissionId}">client.organizations.teams.permissions.<a href="./src/resources/organizations/teams/permissions.ts">delete</a>(organizationId, teamId, permissionId) -> void</code>

### Profile

Types:

- <code><a href="./src/resources/organizations/teams/profile.ts">Profile</a></code>

Methods:

- <code title="get /v1/identity/profile">client.organizations.teams.profile.<a href="./src/resources/organizations/teams/profile.ts">retrieve</a>() -> Profile</code>

### Projects

Types:

- <code><a href="./src/resources/organizations/teams/projects.ts">ProjectRetrieveResponse</a></code>
- <code><a href="./src/resources/organizations/teams/projects.ts">ProjectListResponse</a></code>

Methods:

- <code title="post /v1/identity/projects/{projectId}">client.organizations.teams.projects.<a href="./src/resources/organizations/teams/projects.ts">create</a>(projectId, { ...params }) -> Project</code>
- <code title="get /v1/identity/projects/{projectId}">client.organizations.teams.projects.<a href="./src/resources/organizations/teams/projects.ts">retrieve</a>(projectId) -> ProjectRetrieveResponse</code>
- <code title="get /v1/identity/projects">client.organizations.teams.projects.<a href="./src/resources/organizations/teams/projects.ts">list</a>({ ...params }) -> ProjectListResponse</code>

# MMLObjects

## Instances

Types:

- <code><a href="./src/resources/mml-objects/instances.ts">MMLObjectInstance</a></code>
- <code><a href="./src/resources/mml-objects/instances.ts">MMLObjectInstanceLogAccess</a></code>
- <code><a href="./src/resources/mml-objects/instances.ts">InstanceListResponse</a></code>
- <code><a href="./src/resources/mml-objects/instances.ts">InstanceUsageResponse</a></code>

Methods:

- <code title="post /v1/mml-objects/{projectId}/object-instances/">client.mmlObjects.instances.<a href="./src/resources/mml-objects/instances.ts">create</a>(projectId, { ...params }) -> MMLObjectInstance</code>
- <code title="get /v1/mml-objects/{projectId}/object-instances/{instanceId}">client.mmlObjects.instances.<a href="./src/resources/mml-objects/instances.ts">retrieve</a>(projectId, instanceId) -> MMLObjectInstance</code>
- <code title="post /v1/mml-objects/{projectId}/object-instances/{instanceId}">client.mmlObjects.instances.<a href="./src/resources/mml-objects/instances.ts">update</a>(projectId, instanceId, { ...params }) -> MMLObjectInstance</code>
- <code title="get /v1/mml-objects/{projectId}/object-instances/">client.mmlObjects.instances.<a href="./src/resources/mml-objects/instances.ts">list</a>(projectId, { ...params }) -> InstanceListResponse</code>
- <code title="delete /v1/mml-objects/{projectId}/object-instances/{instanceId}">client.mmlObjects.instances.<a href="./src/resources/mml-objects/instances.ts">delete</a>(projectId, instanceId) -> void</code>
- <code title="get /v1/mml-objects/{projectId}/object-instances/{instanceId}/log-access">client.mmlObjects.instances.<a href="./src/resources/mml-objects/instances.ts">logAccess</a>(projectId, instanceId) -> MMLObjectInstanceLogAccess</code>
- <code title="get /v1/mml-objects/{projectId}/object-instances/{instanceId}/usage">client.mmlObjects.instances.<a href="./src/resources/mml-objects/instances.ts">usage</a>(projectId, instanceId, { ...params }) -> InstanceUsageResponse</code>

## Quota

Types:

- <code><a href="./src/resources/mml-objects/quota.ts">MMLObjectInstanceQuota</a></code>
- <code><a href="./src/resources/mml-objects/quota.ts">QuotaListResponse</a></code>

Methods:

- <code title="get /v1/mml-objects/{projectId}/object-instances-quota">client.mmlObjects.quota.<a href="./src/resources/mml-objects/quota.ts">list</a>(projectId) -> QuotaListResponse</code>

## Templates

Types:

- <code><a href="./src/resources/mml-objects/templates/templates.ts">MMLObjectTemplate</a></code>
- <code><a href="./src/resources/mml-objects/templates/templates.ts">MMLObjectTemplateVersion</a></code>
- <code><a href="./src/resources/mml-objects/templates/templates.ts">TemplateListResponse</a></code>

Methods:

- <code title="post /v1/mml-objects/{projectId}/object-templates/">client.mmlObjects.templates.<a href="./src/resources/mml-objects/templates/templates.ts">create</a>(projectId, { ...params }) -> MMLObjectTemplate</code>
- <code title="get /v1/mml-objects/{projectId}/object-templates/{templateId}">client.mmlObjects.templates.<a href="./src/resources/mml-objects/templates/templates.ts">retrieve</a>(projectId, templateId) -> MMLObjectTemplate</code>
- <code title="post /v1/mml-objects/{projectId}/object-templates/{templateId}">client.mmlObjects.templates.<a href="./src/resources/mml-objects/templates/templates.ts">update</a>(projectId, templateId, { ...params }) -> MMLObjectTemplate</code>
- <code title="get /v1/mml-objects/{projectId}/object-templates/">client.mmlObjects.templates.<a href="./src/resources/mml-objects/templates/templates.ts">list</a>(projectId, { ...params }) -> TemplateListResponse</code>

### Versions

Types:

- <code><a href="./src/resources/mml-objects/templates/versions.ts">VersionListResponse</a></code>

Methods:

- <code title="post /v1/mml-objects/{projectId}/object-templates/{templateId}/versions/">client.mmlObjects.templates.versions.<a href="./src/resources/mml-objects/templates/versions.ts">create</a>(projectId, templateId, { ...params }) -> MMLObjectTemplateVersion</code>
- <code title="get /v1/mml-objects/{projectId}/object-templates/{templateId}/versions/{versionId}/">client.mmlObjects.templates.versions.<a href="./src/resources/mml-objects/templates/versions.ts">retrieve</a>(projectId, templateId, versionId) -> MMLObjectTemplateVersion</code>
- <code title="post /v1/mml-objects/{projectId}/object-templates/{templateId}/versions/{versionId}/">client.mmlObjects.templates.versions.<a href="./src/resources/mml-objects/templates/versions.ts">update</a>(projectId, templateId, versionId, { ...params }) -> MMLObjectTemplateVersion</code>
- <code title="get /v1/mml-objects/{projectId}/object-templates/{templateId}/versions/">client.mmlObjects.templates.versions.<a href="./src/resources/mml-objects/templates/versions.ts">list</a>(projectId, templateId, { ...params }) -> VersionListResponse</code>

## Usage

Types:

- <code><a href="./src/resources/mml-objects/usage.ts">UsageListResponse</a></code>

Methods:

- <code title="get /v1/mml-objects/{projectId}/object-instances-usage">client.mmlObjects.usage.<a href="./src/resources/mml-objects/usage.ts">list</a>(projectId, { ...params }) -> UsageListResponse</code>

# Worlds

Types:

- <code><a href="./src/resources/worlds/worlds.ts">World</a></code>

## Instances

Types:

- <code><a href="./src/resources/worlds/instances/instances.ts">InstanceListResponse</a></code>

Methods:

- <code title="post /v1/worlds/{projectId}/web-world-instances/">client.worlds.instances.<a href="./src/resources/worlds/instances/instances.ts">create</a>(projectId, { ...params }) -> World</code>
- <code title="get /v1/worlds/{projectId}/web-world-instances/{worldId}">client.worlds.instances.<a href="./src/resources/worlds/instances/instances.ts">retrieve</a>(projectId, worldId) -> World</code>
- <code title="post /v1/worlds/{projectId}/web-world-instances/{worldId}">client.worlds.instances.<a href="./src/resources/worlds/instances/instances.ts">update</a>(projectId, worldId, { ...params }) -> World</code>
- <code title="get /v1/worlds/{projectId}/web-world-instances/">client.worlds.instances.<a href="./src/resources/worlds/instances/instances.ts">list</a>(projectId, { ...params }) -> InstanceListResponse</code>
- <code title="delete /v1/worlds/{projectId}/web-world-instances/{worldId}">client.worlds.instances.<a href="./src/resources/worlds/instances/instances.ts">delete</a>(projectId, worldId) -> void</code>

### Usage

Types:

- <code><a href="./src/resources/worlds/instances/usage.ts">UsageRetrieveResponse</a></code>

Methods:

- <code title="get /v1/worlds/{projectId}/web-world-instances/{worldId}/usage">client.worlds.instances.usage.<a href="./src/resources/worlds/instances/usage.ts">retrieve</a>(projectId, worldId, { ...params }) -> UsageRetrieveResponse</code>

## WebWorldInstancesQuota

Types:

- <code><a href="./src/resources/worlds/web-world-instances-quota.ts">WebWorldInstancesQuotaListResponse</a></code>

Methods:

- <code title="get /v1/worlds/{projectId}/web-world-instances-quota">client.worlds.webWorldInstancesQuota.<a href="./src/resources/worlds/web-world-instances-quota.ts">list</a>(projectId) -> WebWorldInstancesQuotaListResponse</code>

## WebWorldInstancesUsage

Types:

- <code><a href="./src/resources/worlds/web-world-instances-usage.ts">WebWorldInstancesUsageListResponse</a></code>

Methods:

- <code title="get /v1/worlds/{projectId}/web-world-instances-usage">client.worlds.webWorldInstancesUsage.<a href="./src/resources/worlds/web-world-instances-usage.ts">list</a>(projectId, { ...params }) -> WebWorldInstancesUsageListResponse</code>

## Subresources

Types:

- <code><a href="./src/resources/worlds/subresources.ts">WorldQuota</a></code>
