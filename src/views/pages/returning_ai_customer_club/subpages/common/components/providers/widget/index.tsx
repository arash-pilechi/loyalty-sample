// Utility
import { ReturningAiWidgetsTypes } from 'utility/enums';
// Components
import AuthenticationProvider from 'views/pages/returning_ai_customer_club/subpages/common/components/providers/authentication';
import IFrameProvider from 'views/pages/returning_ai_customer_club/subpages/common/components/providers/iframe';
// Keys
// import { LocalStorage } from 'keys/local_storage';

interface WidgetProviderProps {
  widgetType: ReturningAiWidgetsTypes;
  withAuth?: boolean;
}

export const commonStyle = {
  minHeight: { xs: 'calc( 100vh - 160px )', md: 'calc( 100vh - 210px )' },
};

const WidgetProvider = ({ widgetType, withAuth }: WidgetProviderProps) => {
  // const token = localStorage.getItem(LocalStorage.keys.returning_ai.widget_token);
  return (
    <>
      {/*{withAuth && !token ? (*/}
      {withAuth ? (
        <AuthenticationProvider widgetType={widgetType}>
          <IFrameProvider widgetType={widgetType} />
        </AuthenticationProvider>
      ) : (
        <IFrameProvider widgetType={widgetType} />
      )}
    </>
  );
};
export default WidgetProvider;
