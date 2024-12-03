// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';

export class Members extends APIResource {}

export interface TeamMember {
  id: string;

  createdAt: string;

  role: 'admin' | 'member';

  userInfo: TeamMember.UserInfo;

  userId?: string;
}

export namespace TeamMember {
  export interface UserInfo {
    displayName?: string;

    email?: string;

    photoUrl?: string;
  }
}

export declare namespace Members {
  export { type TeamMember as TeamMember };
}
