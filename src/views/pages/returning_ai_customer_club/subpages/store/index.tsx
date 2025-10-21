// Main
import { Paper } from '@mui/material';
// Utility
import { ReturningAiWidgetsTypes } from 'utility/enums';
// Components
import WidgetProvider from 'views/pages/returning_ai_customer_club/subpages/common/components/providers/widget';

const Store = () => {
  return (
      <Paper sx={{ p: 2 }}>
          <WidgetProvider widgetType={ReturningAiWidgetsTypes.Store} withAuth />
      </Paper>
  );
};
export default Store;
