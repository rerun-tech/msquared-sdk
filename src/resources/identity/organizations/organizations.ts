// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as TeamsAPI from './teams/teams';
import { Teams } from './teams/teams';

export class Organizations extends APIResource {
  teams: TeamsAPI.Teams = new TeamsAPI.Teams(this._client);
}

Organizations.Teams = Teams;

export declare namespace Organizations {
  export { Teams as Teams };
}
