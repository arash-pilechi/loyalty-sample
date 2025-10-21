// Main
import { Paper } from '@mui/material';
// Utility
import { ReturningAiWidgetsTypes } from 'utility/enums';
// Components
import WidgetProvider from 'views/pages/returning_ai_customer_club/default/subpages/common/components/providers/widget';

const Socials = () => {
  return (
      <Paper sx={{ p: 2 }}>
          <WidgetProvider widgetType={ReturningAiWidgetsTypes.Socials} withAuth />
      </Paper>
  );
};
export default Socials;
