// Main
import { FC, ReactNode, useEffect } from 'react';
import { Stack } from '@mui/material';
// Configs
import { routes } from 'configs/routes/external';
import { LocalStorage } from 'keys/local_storage';
// Hooks
import useResponseNotification from 'hooks/response_notification/default';
// Services
import { AuthenticateWidgetQuery } from 'views/pages/returning_ai_customer_club/default/subpages/common/services/query';
// Utility
import { ReturningAiWidgetsTypes } from 'utility/enums';
// Components
import Loading from 'views/common/components/fallback_component/fetch/loading';
import FetchError from 'views/common/components/fallback_component/fetch/error';
// Styles
import { commonStyle } from 'views/pages/returning_ai_customer_club/default/subpages/common/components/providers/widget';

interface AuthenticationProviderProps {
  widgetType: ReturningAiWidgetsTypes;
  children: ReactNode;
}

const AuthenticationProvider: FC<AuthenticationProviderProps> = ({ widgetType, children }) => {
  const { responseNotificationDefault } = useResponseNotification();
  const AuthenticateWidget = AuthenticateWidgetQuery({ widgetType });
  useEffect(() => {
    if (AuthenticateWidget.isSuccess && AuthenticateWidget?.data?.data?.data?.token) {
      localStorage.setItem(
        LocalStorage.keys.returning_ai.widget_token,
        AuthenticateWidget?.data?.data?.data?.token,
      );
    } else if (AuthenticateWidget.isError) {
      responseNotificationDefault((AuthenticateWidget.error as any)?.response);
    }
  }, [AuthenticateWidget, widgetType]);
  useEffect(() => {
    const postToken = (event: any) => {
      if (event?.origin !== routes.returningAi.widgets) {
        return;
      }
      const { type } = event.data;
      if (type === LocalStorage.keys.returning_ai.type) {
        const token = localStorage.getItem(LocalStorage.keys.returning_ai.widget_token);
        if (event?.source) {
          event.source.postMessage(
            {
              type: LocalStorage.keys.returning_ai.type,
              value: token,
            },
            event.origin,
          );
        }
      }
    };
    window.addEventListener('message', (event: any) => postToken(event));
    return () => {
      window.removeEventListener('message', (event: any) => postToken(event));
    };
  }, []);
  if (AuthenticateWidget.isLoading) {
    return (
      <Stack alignItems="center" justifyContent="center" sx={{ ...commonStyle }}>
        <Loading height={5} />
      </Stack>
    );
  }
  if (AuthenticateWidget.isError) {
    return (
      <Stack alignItems="center" justifyContent="center" sx={{ ...commonStyle }}>
        <FetchError />
      </Stack>
    );
  }
  return <>{children}</>;
};
export default AuthenticationProvider;
