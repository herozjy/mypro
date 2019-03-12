// import Home from "../components/Home";
import FirstPage from "../components/FirstPage/FirstPage";
    import Scan from "../components/Home/Nav/Scan";
    import MoneyCollect from "../components/Home/Nav/MoneyCollect";
    import Barcode from "../components/Home/Nav/Barcode";
    import CreditCard from "../components/Home/Nav/CreditCard";
        import MyAppsIndex from "../components/FirstPage/MyApps/MyAppsIndex";
import Shop from "../components/Shop/Shop";
import Wealth from "../components/Wealth/Wealth";
import My from "../components/My/My";

import Friends from "../components/Friends/Friends";


const  routes  =[
    {
        component : Scan,
        exact : true,
        path:"/home/scan",
    },
    {
        component : MoneyCollect,
        exact : true,
        path:"/home/moneycollect",
    },
    {
        component : Barcode,
        exact : true,
        path:"/home/barcode",
    },
    {
        component : CreditCard,
        exact : true,
        path:"/home/creditcard",
    },
    // {
    //     component : Home,
    //     exact : false,
    //     path:"/",
    //
    // },
    {
        component : FirstPage,
        exact : true,
        path:"/",
    },
    {
        component : Wealth,
        exact : true,
        path:"/wealth",
    },
    {
        component : Shop,
        exact : true,
        path:"/shop",
    },
    {
        component : Friends,
        exact : true,
        path:"/friends",
    },
    {
        component : My,
        exact : true,
        path:"/my",
    },
    {
        component : MyAppsIndex,
        exact : true,
        path:"/myappsIndex",
    },

];
export  default routes;