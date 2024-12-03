// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ObjectInstancesUsageAPI from './object-instances-usage';
import {
  ObjectInstancesUsage,
  ObjectInstancesUsageListParams,
  ObjectInstancesUsageListResponse,
} from './object-instances-usage';
import * as ObjectTemplatesAPI from './object-templates/object-templates';
import {
  ObjectTemplateCreateParams,
  ObjectTemplateListParams,
  ObjectTemplateListResponse,
  ObjectTemplateUpdateParams,
  ObjectTemplates,
} from './object-templates/object-templates';

export class MMLObjects extends APIResource {
  objectInstancesUsage: ObjectInstancesUsageAPI.ObjectInstancesUsage =
    new ObjectInstancesUsageAPI.ObjectInstancesUsage(this._client);
  objectTemplates: ObjectTemplatesAPI.ObjectTemplates = new ObjectTemplatesAPI.ObjectTemplates(this._client);
}

MMLObjects.ObjectInstancesUsage = ObjectInstancesUsage;
MMLObjects.ObjectTemplates = ObjectTemplates;

export declare namespace MMLObjects {
  export {
    ObjectInstancesUsage as ObjectInstancesUsage,
    type ObjectInstancesUsageListResponse as ObjectInstancesUsageListResponse,
    type ObjectInstancesUsageListParams as ObjectInstancesUsageListParams,
  };

  export {
    ObjectTemplates as ObjectTemplates,
    type ObjectTemplateListResponse as ObjectTemplateListResponse,
    type ObjectTemplateCreateParams as ObjectTemplateCreateParams,
    type ObjectTemplateUpdateParams as ObjectTemplateUpdateParams,
    type ObjectTemplateListParams as ObjectTemplateListParams,
  };
}
