import Default from "../components/Default/Default";
import Settings from "../components/Settings/Settings";
import General from "../components/Settings/General/General";
import Advanced from "../components/Settings/Advanced/Advanced";
import Numbers from "../components/Settings/Numbers/Numbers";
import Price from "../components/Price/Price";

const routes = [
  {
    path: "/",
    component: Default
  },
  {
    path: "/price",
    component: Price
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
