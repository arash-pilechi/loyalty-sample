// Main
import { useQuery } from '@tanstack/react-query';
// keys
import { QueryKeys } from 'keys/query';
// Services
import { AuthenticateWidgetApi } from 'views/pages/returning_ai_customer_club/subpages/common/services/api';
// Types
import { AuthenticateWidgetParamsTypes } from 'views/pages/returning_ai_customer_club/subpages/common/services/types';

export const AuthenticateWidgetQuery = (params: AuthenticateWidgetParamsTypes) =>
  useQuery({
    queryKey: [QueryKeys.CustomerClub.returningAi.authenticateWidget, params],
    queryFn: () => AuthenticateWidgetApi(params),
    gcTime: 0,
    staleTime: 0,
  });
