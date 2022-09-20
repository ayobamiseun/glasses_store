import TabUnstyled from '@mui/base/TabUnstyled';
import TabsListUnstyled from '@mui/base/TabUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabsUnstyled from '@mui/base/TabsUnstyled';

export default function MyApp() {
  return (
    <TabsUnstyled>
      <TabsListUnstyled>
        <TabUnstyled>{/* tab one */}</TabUnstyled>
        <TabUnstyled>{/* tab two */}</TabUnstyled>
      </TabsListUnstyled>
      <TabPanelUnstyled>{/* panel one */}</TabPanelUnstyled>
      <TabPanelUnstyled>{/* panel two */}</TabPanelUnstyled>
    </TabsUnstyled>
  );
}
