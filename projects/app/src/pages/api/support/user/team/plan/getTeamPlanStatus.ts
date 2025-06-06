import type { NextApiRequest, NextApiResponse } from 'next';
import { authCert } from '@fastgpt/service/support/permission/auth/common';
import { getTeamPlanStatus } from '@fastgpt/service/support/wallet/sub/utils';
import { NextAPI } from '@/service/middleware/entry';

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const { teamId } = await authCert({
      req,
      authToken: true
    });

    return getTeamPlanStatus({
      teamId
    });
  } catch (error) {}
}

export default NextAPI(handler);
