// Main
import { useMemo } from 'react';
import { Box, Stack } from '@mui/material';
// Configs
import { routes as externalRoutes } from 'configs/routes/external';
// Utility
import { ReturningAiWidgetsTypes } from 'utility/enums';
// Components
import Loading from 'views/common/components/fallback_component/fetch/loading';
// Styles
import { commonStyle } from 'views/pages/returning_ai_customer_club/default/subpages/common/components/providers/widget';

interface WidgetProviderProps {
  widgetType: ReturningAiWidgetsTypes;
}

const IframeProvider = ({ widgetType }: WidgetProviderProps) => {
  const widgetSrc = useMemo(() => {
    switch (widgetType) {
      case ReturningAiWidgetsTypes.Channels:
        return 'channel-widget';
      case ReturningAiWidgetsTypes.Leaderboard:
        return 'custom-leaderboards';
      case ReturningAiWidgetsTypes.Milestone:
        return 'milestone-widget';
      case ReturningAiWidgetsTypes.Socials:
        return 'social-widget';
      case ReturningAiWidgetsTypes.Store:
        return 'store-widget';
      case ReturningAiWidgetsTypes.CurrencyOverview:
        return 'currency-overview-widget';
      default:
        return '';
    }
  }, [widgetType]);
  return (
    <Box
      sx={{
        ...commonStyle,
        position: 'relative',
      }}
    >
      <Stack
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: 1,
        }}
      >
        <Loading />
      </Stack>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: 2,
        }}
      >
        <Box
          component="iframe"
          src={`${externalRoutes.returningAi.widgets}/${widgetSrc}/${process.env.REACT_APP_RETURNINGAI_WIDGET_ID}`}
          id="returningAiWidgetIframe"
          frameBorder="0"
          width="100%"
          height="100%"
          allow="clipboard-write"
          sx={{
            ...commonStyle,
            borderRadius: '1rem',
          }}
        />
      </Box>
    </Box>
  );
};

export default IframeProvider;
