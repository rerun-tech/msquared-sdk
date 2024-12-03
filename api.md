# Shared

Types:

- <code><a href="./src/resources/shared.ts">Project</a></code>
- <code><a href="./src/resources/shared.ts">World</a></code>

# Organizations

Types:

- <code><a href="./src/resources/organizations/organizations.ts">Organization</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationRetrieveResponse</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationListResponse</a></code>

Methods:

- <code title="post /v1/identity/organizations/{organizationId}">client.organizations.<a href="./src/resources/organizations/organizations.ts">create</a>(organizationId, { ...params }) -> Organization</code>
- <code title="get /v1/identity/organizations/{organizationId}">client.organizations.<a href="./src/resources/organizations/organizations.ts">retrieve</a>(organizationId) -> OrganizationRetrieveResponse</code>
- <code title="get /v1/identity/organizations">client.organizations.<a href="./src/resources/organizations/organizations.ts">list</a>({ ...params }) -> OrganizationListResponse</code>

## Projects

Types:

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

Methods:

- <code title="get /v1/identity/organizations/{organizationId}/invite-offers/{inviteId}">client.organizations.invites.inviteOffers.<a href="./src/resources/organizations/invites/invite-offers.ts">retrieve</a>(organizationId, inviteId, { ...params }) -> OrganizationInviteOffer</code>

## Members

Types:

- <code><a href="./src/resources/organizations/members/members.ts">Member</a></code>

Methods:

- <code title="post /v1/identity/organizations/{organizationId}/members/{memberId}">client.organizations.members.<a href="./src/resources/organizations/members/members.ts">create</a>(organizationId, memberId, { ...params }) -> Member</code>
- <code title="get /v1/identity/organizations/{organizationId}/members/{memberId}">client.organizations.members.<a href="./src/resources/organizations/members/members.ts">retrieve</a>(organizationId, memberId) -> Member</code>
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

- <code title="post /v1/identity/organizations/{organizationId}/teams/{teamId}">client.organizations.teams.<a href="./src/resources/organizations/teams/teams.ts">create</a>(organizationId, teamId, { ...params }) -> Team</code>
- <code title="get /v1/identity/organizations/{organizationId}/teams/{teamId}">client.organizations.teams.<a href="./src/resources/organizations/teams/teams.ts">retrieve</a>(organizationId, teamId) -> Team</code>
- <code title="get /v1/identity/organizations/{organizationId}/teams">client.organizations.teams.<a href="./src/resources/organizations/teams/teams.ts">list</a>(organizationId, { ...params }) -> TeamListResponse</code>

### Members

Types:

- <code><a href="./src/resources/organizations/teams/members.ts">TeamMember</a></code>

### Permissions

Types:

- <code><a href="./src/resources/organizations/teams/permissions.ts">TeamPermission</a></code>

# Identity

## Organizations

### Teams

Methods:

- <code title="delete /v1/identity/organizations/{organizationId}/teams/{teamId}">client.identity.organizations.teams.<a href="./src/resources/identity/organizations/teams/teams.ts">delete</a>(organizationId, teamId) -> void</code>

#### Members

Types:

- <code><a href="./src/resources/identity/organizations/teams/members.ts">MemberListResponse</a></code>

Methods:

- <code title="post /v1/identity/organizations/{organizationId}/teams/{teamId}/members/{memberId}">client.identity.organizations.teams.members.<a href="./src/resources/identity/organizations/teams/members.ts">create</a>(organizationId, teamId, memberId, { ...params }) -> TeamMember</code>
- <code title="get /v1/identity/organizations/{organizationId}/teams/{teamId}/members">client.identity.organizations.teams.members.<a href="./src/resources/identity/organizations/teams/members.ts">list</a>(organizationId, teamId, { ...params }) -> MemberListResponse</code>
- <code title="delete /v1/identity/organizations/{organizationId}/teams/{teamId}/members/{memberId}">client.identity.organizations.teams.members.<a href="./src/resources/identity/organizations/teams/members.ts">delete</a>(organizationId, teamId, memberId) -> void</code>

#### Permissions

Types:

- <code><a href="./src/resources/identity/organizations/teams/permissions.ts">PermissionListResponse</a></code>

Methods:

- <code title="post /v1/identity/organizations/{organizationId}/teams/{teamId}/permissions">client.identity.organizations.teams.permissions.<a href="./src/resources/identity/organizations/teams/permissions.ts">create</a>(organizationId, teamId, { ...params }) -> TeamPermission</code>
- <code title="get /v1/identity/organizations/{organizationId}/teams/{teamId}/permissions">client.identity.organizations.teams.permissions.<a href="./src/resources/identity/organizations/teams/permissions.ts">list</a>(organizationId, teamId, { ...params }) -> PermissionListResponse</code>
- <code title="delete /v1/identity/organizations/{organizationId}/teams/{teamId}/permissions/{permissionId}">client.identity.organizations.teams.permissions.<a href="./src/resources/identity/organizations/teams/permissions.ts">delete</a>(organizationId, teamId, permissionId) -> void</code>

## Projects

Types:

- <code><a href="./src/resources/identity/projects.ts">ProjectRetrieveResponse</a></code>
- <code><a href="./src/resources/identity/projects.ts">ProjectListResponse</a></code>

Methods:

- <code title="get /v1/identity/projects/{projectId}">client.identity.projects.<a href="./src/resources/identity/projects.ts">retrieve</a>(projectId) -> ProjectRetrieveResponse</code>
- <code title="get /v1/identity/projects">client.identity.projects.<a href="./src/resources/identity/projects.ts">list</a>({ ...params }) -> ProjectListResponse</code>

# Projects

Methods:

- <code title="post /v1/identity/projects/{projectId}">client.projects.<a href="./src/resources/projects.ts">create</a>(projectId, { ...params }) -> Project</code>

# Profile

Types:

- <code><a href="./src/resources/profile.ts">Profile</a></code>

Methods:

- <code title="get /v1/identity/profile">client.profile.<a href="./src/resources/profile.ts">retrieve</a>() -> Profile</code>

# Objects

## ObjectInstances

Types:

- <code><a href="./src/resources/objects/object-instances.ts">MMLObjectInstance</a></code>
- <code><a href="./src/resources/objects/object-instances.ts">MMLObjectInstanceLogAccess</a></code>
- <code><a href="./src/resources/objects/object-instances.ts">ObjectInstanceListResponse</a></code>
- <code><a href="./src/resources/objects/object-instances.ts">ObjectInstanceUsageResponse</a></code>

Methods:

- <code title="post /v1/mml-objects/{projectId}/object-instances/">client.objects.objectInstances.<a href="./src/resources/objects/object-instances.ts">create</a>(projectId, { ...params }) -> MMLObjectInstance</code>
- <code title="get /v1/mml-objects/{projectId}/object-instances/{instanceId}">client.objects.objectInstances.<a href="./src/resources/objects/object-instances.ts">retrieve</a>(projectId, instanceId) -> MMLObjectInstance</code>
- <code title="post /v1/mml-objects/{projectId}/object-instances/{instanceId}">client.objects.objectInstances.<a href="./src/resources/objects/object-instances.ts">update</a>(projectId, instanceId, { ...params }) -> MMLObjectInstance</code>
- <code title="get /v1/mml-objects/{projectId}/object-instances/">client.objects.objectInstances.<a href="./src/resources/objects/object-instances.ts">list</a>(projectId, { ...params }) -> ObjectInstanceListResponse</code>
- <code title="delete /v1/mml-objects/{projectId}/object-instances/{instanceId}">client.objects.objectInstances.<a href="./src/resources/objects/object-instances.ts">delete</a>(projectId, instanceId) -> void</code>
- <code title="get /v1/mml-objects/{projectId}/object-instances/{instanceId}/log-access">client.objects.objectInstances.<a href="./src/resources/objects/object-instances.ts">logAccess</a>(projectId, instanceId) -> MMLObjectInstanceLogAccess</code>
- <code title="get /v1/mml-objects/{projectId}/object-instances/{instanceId}/usage">client.objects.objectInstances.<a href="./src/resources/objects/object-instances.ts">usage</a>(projectId, instanceId, { ...params }) -> ObjectInstanceUsageResponse</code>

## ObjectInstancesQuota

Types:

- <code><a href="./src/resources/objects/object-instances-quota/object-instances-quota.ts">ObjectInstancesQuotaListResponse</a></code>

Methods:

- <code title="get /v1/mml-objects/{projectId}/object-instances-quota">client.objects.objectInstancesQuota.<a href="./src/resources/objects/object-instances-quota/object-instances-quota.ts">list</a>(projectId) -> ObjectInstancesQuotaListResponse</code>

### Quota

Types:

- <code><a href="./src/resources/objects/object-instances-quota/quota.ts">MMLObjectInstanceQuota</a></code>

## ObjectTemplates

Types:

- <code><a href="./src/resources/objects/object-templates/object-templates.ts">MMLObjectTemplate</a></code>

### Versions

Types:

- <code><a href="./src/resources/objects/object-templates/versions.ts">MMLObjectTemplateVersion</a></code>

# MMLObjects

## ObjectInstancesUsage

Types:

- <code><a href="./src/resources/mml-objects/object-instances-usage.ts">ObjectInstancesUsageListResponse</a></code>

Methods:

- <code title="get /v1/mml-objects/{projectId}/object-instances-usage">client.mmlObjects.objectInstancesUsage.<a href="./src/resources/mml-objects/object-instances-usage.ts">list</a>(projectId, { ...params }) -> ObjectInstancesUsageListResponse</code>

## ObjectTemplates

Types:

- <code><a href="./src/resources/mml-objects/object-templates/object-templates.ts">ObjectTemplateListResponse</a></code>

Methods:

- <code title="post /v1/mml-objects/{projectId}/object-templates/">client.mmlObjects.objectTemplates.<a href="./src/resources/mml-objects/object-templates/object-templates.ts">create</a>(projectId, { ...params }) -> MMLObjectTemplate</code>
- <code title="get /v1/mml-objects/{projectId}/object-templates/{templateId}">client.mmlObjects.objectTemplates.<a href="./src/resources/mml-objects/object-templates/object-templates.ts">retrieve</a>(projectId, templateId) -> MMLObjectTemplate</code>
- <code title="post /v1/mml-objects/{projectId}/object-templates/{templateId}">client.mmlObjects.objectTemplates.<a href="./src/resources/mml-objects/object-templates/object-templates.ts">update</a>(projectId, templateId, { ...params }) -> MMLObjectTemplate</code>
- <code title="get /v1/mml-objects/{projectId}/object-templates/">client.mmlObjects.objectTemplates.<a href="./src/resources/mml-objects/object-templates/object-templates.ts">list</a>(projectId, { ...params }) -> ObjectTemplateListResponse</code>

### Versions

Types:

- <code><a href="./src/resources/mml-objects/object-templates/versions.ts">VersionListResponse</a></code>

Methods:

- <code title="post /v1/mml-objects/{projectId}/object-templates/{templateId}/versions/">client.mmlObjects.objectTemplates.versions.<a href="./src/resources/mml-objects/object-templates/versions.ts">create</a>(projectId, templateId, { ...params }) -> MMLObjectTemplateVersion</code>
- <code title="get /v1/mml-objects/{projectId}/object-templates/{templateId}/versions/{versionId}/">client.mmlObjects.objectTemplates.versions.<a href="./src/resources/mml-objects/object-templates/versions.ts">retrieve</a>(projectId, templateId, versionId) -> MMLObjectTemplateVersion</code>
- <code title="post /v1/mml-objects/{projectId}/object-templates/{templateId}/versions/{versionId}/">client.mmlObjects.objectTemplates.versions.<a href="./src/resources/mml-objects/object-templates/versions.ts">update</a>(projectId, templateId, versionId, { ...params }) -> MMLObjectTemplateVersion</code>
- <code title="get /v1/mml-objects/{projectId}/object-templates/{templateId}/versions/">client.mmlObjects.objectTemplates.versions.<a href="./src/resources/mml-objects/object-templates/versions.ts">list</a>(projectId, templateId, { ...params }) -> VersionListResponse</code>

# Worlds

Types:

- <code><a href="./src/resources/worlds/worlds.ts">WorldQuota</a></code>

## WebWorldInstances

Types:

- <code><a href="./src/resources/worlds/web-world-instances/web-world-instances.ts">WebWorldInstanceListResponse</a></code>

Methods:

- <code title="post /v1/worlds/{projectId}/web-world-instances/">client.worlds.webWorldInstances.<a href="./src/resources/worlds/web-world-instances/web-world-instances.ts">create</a>(projectId, { ...params }) -> World</code>
- <code title="get /v1/worlds/{projectId}/web-world-instances/{worldId}">client.worlds.webWorldInstances.<a href="./src/resources/worlds/web-world-instances/web-world-instances.ts">retrieve</a>(projectId, worldId) -> World</code>
- <code title="post /v1/worlds/{projectId}/web-world-instances/{worldId}">client.worlds.webWorldInstances.<a href="./src/resources/worlds/web-world-instances/web-world-instances.ts">update</a>(projectId, worldId, { ...params }) -> World</code>
- <code title="get /v1/worlds/{projectId}/web-world-instances/">client.worlds.webWorldInstances.<a href="./src/resources/worlds/web-world-instances/web-world-instances.ts">list</a>(projectId, { ...params }) -> WebWorldInstanceListResponse</code>
- <code title="delete /v1/worlds/{projectId}/web-world-instances/{worldId}">client.worlds.webWorldInstances.<a href="./src/resources/worlds/web-world-instances/web-world-instances.ts">delete</a>(projectId, worldId) -> void</code>

### Usage

Types:

- <code><a href="./src/resources/worlds/web-world-instances/usage.ts">UsageRetrieveResponse</a></code>

Methods:

- <code title="get /v1/worlds/{projectId}/web-world-instances/{worldId}/usage">client.worlds.webWorldInstances.usage.<a href="./src/resources/worlds/web-world-instances/usage.ts">retrieve</a>(projectId, worldId, { ...params }) -> UsageRetrieveResponse</code>

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
