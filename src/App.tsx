import KitchenIcon from "@mui/icons-material/Kitchen";
import { Box } from "@mui/material";
import { ContainerLayout } from "@react-admin/ra-navigation";
import { Search } from "@react-admin/ra-search";
import {
  Admin,
  RefreshIconButton,
  Resource,
  ToggleThemeButton,
  localStorageStore,
} from "react-admin";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import customers from "./customers";
import products from "./products";
import tickets from "./tickets";
import { MessageShow } from "./messages/MessageShow";
import { authProvider } from "./authProvider";
import { dataProvider } from "./dataProvider";
import { ConnectionWatcher } from "./ConnectionWatcher";

const MyLayout = (props: any) => (
  <>
    <ContainerLayout
      {...props}
      maxWidth="xl"
      toolbar={
        <Box display="flex" gap={1} mr={1} alignItems="center">
          <Search />
          <ToggleThemeButton />
          <RefreshIconButton />
        </Box>
      }
      sx={{
        "& .RaHeader-toolbar > *": {
          flexBasis: "33.33%",
          // FIXME: This should be fixed in ra-navigation
          // alignItems: "center",
          justifyContent: "center",
        },
        "& .RaHeader-toolbar > *:first-of-type": {
          justifyContent: "flex-start",
        },
        "& .RaHeader-toolbar > *:last-child": {
          justifyContent: "flex-end",
        },
        "& .MuiTabs-flexContainer": {
          justifyContent: "center",
        },
      }}
    />
    <ReactQueryDevtools
      initialIsOpen={false}
      // To avoid collision with the ConnectionWatcher notifications
      buttonPosition="bottom-left"
    />
    <ConnectionWatcher />
  </>
);

const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    store={localStorageStore(undefined, "HelpDesk")}
    title={
      <Box display="flex" gap={1} alignItems="center">
        <KitchenIcon /> Acme Refrigerator HelpDesk
      </Box>
    }
    layout={MyLayout}
  >
    <Resource name="tickets" {...tickets} />
    <Resource name="customers" {...customers} />
    <Resource name="products" {...products} />
    <Resource
      name="agents"
      recordRepresentation={(record) =>
        `${record.firstName} ${record.lastName}`
      }
    />
    <Resource name="messages" show={MessageShow} />
  </Admin>
);

export default App;
