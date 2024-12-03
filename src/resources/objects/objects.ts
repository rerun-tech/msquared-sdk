// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ObjectInstancesQuotaAPI from './object-instances-quota';
import { ObjectInstancesQuota, ObjectInstancesQuotaListResponse } from './object-instances-quota';
import * as ObjectInstancesAPI from './object-instances/object-instances';
import {
  MmlObjectInstance,
  MmlObjectInstanceLogAccess,
  ObjectInstanceCreateParams,
  ObjectInstanceListParams,
  ObjectInstanceListResponse,
  ObjectInstanceUpdateParams,
  ObjectInstanceUsageParams,
  ObjectInstanceUsageResponse,
  ObjectInstances,
} from './object-instances/object-instances';
import * as ObjectTemplatesAPI from './object-templates/object-templates';
import { MmlObjectTemplate, ObjectTemplates } from './object-templates/object-templates';

export class Objects extends APIResource {
  objectInstances: ObjectInstancesAPI.ObjectInstances = new ObjectInstancesAPI.ObjectInstances(this._client);
  objectInstancesQuota: ObjectInstancesQuotaAPI.ObjectInstancesQuota =
    new ObjectInstancesQuotaAPI.ObjectInstancesQuota(this._client);
  objectTemplates: ObjectTemplatesAPI.ObjectTemplates = new ObjectTemplatesAPI.ObjectTemplates(this._client);
}

Objects.ObjectInstances = ObjectInstances;
Objects.ObjectInstancesQuota = ObjectInstancesQuota;
Objects.ObjectTemplates = ObjectTemplates;

export declare namespace Objects {
  export {
    ObjectInstances as ObjectInstances,
    type MmlObjectInstance as MmlObjectInstance,
    type MmlObjectInstanceLogAccess as MmlObjectInstanceLogAccess,
    type ObjectInstanceListResponse as ObjectInstanceListResponse,
    type ObjectInstanceUsageResponse as ObjectInstanceUsageResponse,
    type ObjectInstanceCreateParams as ObjectInstanceCreateParams,
    type ObjectInstanceUpdateParams as ObjectInstanceUpdateParams,
    type ObjectInstanceListParams as ObjectInstanceListParams,
    type ObjectInstanceUsageParams as ObjectInstanceUsageParams,
  };

  export {
    ObjectInstancesQuota as ObjectInstancesQuota,
    type ObjectInstancesQuotaListResponse as ObjectInstancesQuotaListResponse,
  };

  export { ObjectTemplates as ObjectTemplates, type MmlObjectTemplate as MmlObjectTemplate };
}
