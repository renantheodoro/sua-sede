import Home from "@/presentation/views/Home.vue";
import TaxAddress from "@/presentation/views/TaxAddress.vue";
import Legalization from "@/presentation/views/Legalization.vue";
import Accounting from "@/presentation/views/Accounting.vue";
import TrademarkRegistration from "@/presentation/views/TrademarkRegistration.vue";
import NotFound from "@/presentation/views/NotFound.vue";

export default [
  {
    path: "/",
    name: "home",
    component: Home,
  },

  {
    path: "/endereco-fiscal",
    name: "tax-address",
    component: TaxAddress,
  },

  {
    path: "/legalizacao",
    name: "legalization",
    component: Legalization,
  },

  {
    path: "/contabilidade-digital",
    name: "accounting",
    component: Accounting,
  },

  {
    path: "/registro-de-marca",
    name: "trademark-registration",
    component: TrademarkRegistration,
  },

  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
];
