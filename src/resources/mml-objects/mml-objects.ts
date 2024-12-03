// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as InstancesAPI from './instances';
import {
  InstanceCreateParams,
  InstanceListParams,
  InstanceListResponse,
  InstanceUpdateParams,
  InstanceUsageParams,
  InstanceUsageResponse,
  Instances,
  MMLObjectInstance,
  MMLObjectInstanceLogAccess,
} from './instances';
import * as QuotaAPI from './quota';
import { MMLObjectInstanceQuota, Quota, QuotaListResponse } from './quota';
import * as UsageAPI from './usage';
import { Usage, UsageListParams, UsageListResponse } from './usage';
import * as TemplatesAPI from './templates/templates';
import {
  MMLObjectTemplate,
  MMLObjectTemplateVersion,
  TemplateCreateParams,
  TemplateListParams,
  TemplateListResponse,
  TemplateUpdateParams,
  Templates,
} from './templates/templates';

export class MMLObjects extends APIResource {
  instances: InstancesAPI.Instances = new InstancesAPI.Instances(this._client);
  quota: QuotaAPI.Quota = new QuotaAPI.Quota(this._client);
  templates: TemplatesAPI.Templates = new TemplatesAPI.Templates(this._client);
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);
}

MMLObjects.Instances = Instances;
MMLObjects.Quota = Quota;
MMLObjects.Templates = Templates;
MMLObjects.Usage = Usage;

export declare namespace MMLObjects {
  export {
    Instances as Instances,
    type MMLObjectInstance as MMLObjectInstance,
    type MMLObjectInstanceLogAccess as MMLObjectInstanceLogAccess,
    type InstanceListResponse as InstanceListResponse,
    type InstanceUsageResponse as InstanceUsageResponse,
    type InstanceCreateParams as InstanceCreateParams,
    type InstanceUpdateParams as InstanceUpdateParams,
    type InstanceListParams as InstanceListParams,
    type InstanceUsageParams as InstanceUsageParams,
  };

  export {
    Quota as Quota,
    type MMLObjectInstanceQuota as MMLObjectInstanceQuota,
    type QuotaListResponse as QuotaListResponse,
  };

  export {
    Templates as Templates,
    type MMLObjectTemplate as MMLObjectTemplate,
    type MMLObjectTemplateVersion as MMLObjectTemplateVersion,
    type TemplateListResponse as TemplateListResponse,
    type TemplateCreateParams as TemplateCreateParams,
    type TemplateUpdateParams as TemplateUpdateParams,
    type TemplateListParams as TemplateListParams,
  };

  export {
    Usage as Usage,
    type UsageListResponse as UsageListResponse,
    type UsageListParams as UsageListParams,
  };
}
