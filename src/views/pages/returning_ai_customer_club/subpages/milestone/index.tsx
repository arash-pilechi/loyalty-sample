// Main
import { Paper } from '@mui/material';
// Utility
import { ReturningAiWidgetsTypes } from 'utility/enums';
// Components
import WidgetProvider from 'views/pages/returning_ai_customer_club/subpages/common/components/providers/widget';

const Milestone = () => {
  return (
      <Paper sx={{ p: 2 }}>
          <WidgetProvider widgetType={ReturningAiWidgetsTypes.Milestone} withAuth />
      </Paper>
  );
};
export default Milestone;
