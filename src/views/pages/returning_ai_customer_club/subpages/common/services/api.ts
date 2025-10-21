// Configs
import axios from 'configs/axios/instance';
// Types
import { AuthenticateWidgetParamsTypes } from 'views/pages/returning_ai_customer_club/subpages/common/services/types';

export const AuthenticateWidgetApi = (params: AuthenticateWidgetParamsTypes) =>
  axios({
    method: 'GET',
    url: '/api/app/returning-loyalty/widget-authentication',
    headers: {
      credentials: 'include',
    },
    params,
  });
