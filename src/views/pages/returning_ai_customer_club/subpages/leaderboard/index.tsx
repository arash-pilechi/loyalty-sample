// Main
import { Paper } from '@mui/material';
// Components
import WidgetProvider from 'views/pages/returning_ai_customer_club/subpages/common/components/providers/widget';
// Utility
import { ReturningAiWidgetsTypes } from 'utility/enums';

const Leaderboard = () => {
  return (
      <Paper sx={{ p: 2 }}>
          <WidgetProvider widgetType={ReturningAiWidgetsTypes.Leaderboard} />
      </Paper>
  );
};
export default Leaderboard;
