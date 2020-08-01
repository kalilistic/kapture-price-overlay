import Default from "../components/Default/Default";
import Settings from "../components/Settings/Settings";
import General from "../components/Settings/General/General";
import Advanced from "../components/Settings/Advanced/Advanced";
import Numbers from "../components/Settings/Numbers/Numbers";
import Prices from "../components/Prices/Prices";
import Filters from "../components/Settings/Filters/Filters";

const routes = [
  {
    path: "/",
    component: Default
  },
  {
    path: "/prices",
    component: Prices
  },
  {
    path: "/settings",
    component: Settings,
    children: [
      {
        path: "general",
        component: General
      },
      {
        path: "numbers",
        component: Numbers
      },
      {
        path: "filters",
        component: Filters
      },
      {
        path: "advanced",
        component: Advanced
      }
    ]
  },
  {
    path: "*",
    component: Default
  }
];

export default routes;
