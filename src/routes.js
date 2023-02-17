import { Home } from "@mui/icons-material";
import About from "./view/About";
import HomePage from "./view/HomePage";
import ProductDetailsPage from "./view/ProductDetailsPage";
import CartPage from "./view/CartPage";
import ContactUs from "./view/ContactUs";
import Stores from "./view/Stores/Stores";
import Categories from "./view/Categores";
import FilterPage from "./view/FilterPage";
import OrderDetails from "./view/Order/OrderDetails";
import OrderComplete from "./view/Order/OrderComplete";
import OrderHistory from "./view/Order/OrderHistory";
import Locations from "./view/Locations";
import MyCoupons from "./view/MyCoupons";
import Notifications from "./view/Notifications";
import TryOn from "./view/TryOn";
import AddPrepcriptions from "./view/HomeEyeTesting/AddPrepcriptions";
import StoresPage from "./view/Stores/Stores";
import OrederReturn from "./view/Order/OrederReturn";
import ProfilePage from "./view/User Pages/ProfilePage";
import SellerDetails from "./view/Stores/SellerDetails";
import SelectGlass from "./view/SelectGlasses/SelectGlass";
import BookingDetails from "./view/HomeEyeTesting";
import UserRegister from "./view/User Pages/UserRegister";


const routes = [
  {
    type: "route",
    name: "HomePage",
    key: "home",
    route: "/home-page",
    icon: <Home />,
    component: <HomePage />,
  },
  {
    type: "route",
    name: "Product-Details-page",
    key: "porductDetailsPage",
    route: "/product-page/:id",

    component: <ProductDetailsPage />,
  },
  {
    type: "route",
    name: "About",
    key: "about Page",
    route: "/about-page",

    component: <About />,
  },
  {
    type: "route",
    name: "Cart",
    key: "cart Page",
    route: "/cart-page/:id",

    component: <CartPage />,
  },
  {
    type: "route",
    name: "Cart",
    key: "cart Page",
    route: "/cart-page",

    component: <CartPage />,
  },
  {
    type: "route",
    name: "Contact us",
    key: "contact us page",
    route: "/contactUs-page",

    component: <ContactUs />,
  },
  {
    type: "route",
    name: "Stores",
    key: "stores page",
    route: "/stores-page",

    component: <Stores />,
  },
  {
    type: "route",
    name: "Categories",
    key: "categories page",
    route: "/categories-page",

    component: <Categories />,
  },
  {
    type: "route",
    name: "Categories-Men",
    key: "filter-page",
    route: "/filter-page/:id",

    component: <FilterPage />,
  },

  {
    type: "route",
    name: "CheckOut page",
    key: "checkout-page",
    route: "/checkout-page",

    component: <OrderDetails />,
  },
  {
    type: "route",
    name: "Order Details",
    key: "orderDetails page",
    route: "/orderDetails-page",

    component: <OrderComplete />,
  },

  {
    type: "route",
    name: "Order History",
    key: "orderHistory page",
    route: "/orderHistory-page",

    component: <OrderHistory />,
  },
  {
    type: "route",
    name: "Location",
    key: "location page",
    route: "/location-page",

    component: <Locations />,
  },
  {
    type: "route",
    name: "MyCoupons",
    key: "MyCoupons page",
    route: "/myCoupons-page",

    component: <MyCoupons />,
  },

  {
    type: "route",
    name: "Notifications",
    key: "Notifications page",
    route: "/notifications-page",

    component: <Notifications />,
  },
  {
    type: "route",
    name: "TryOn",
    key: "TryOn page",
    route: "/tryOn-page",

    component: <TryOn />,
  },
  {
    type: "route",
    name: "addPrescriptions",
    key: "addPrescriptions page",
    route: "/addPrescriptions-page",

    component: <AddPrepcriptions />,
  },
  {
    type: "route",
    name: "Stores",
    key: "Stores page",
    route: "/Stores-page",

    component: <StoresPage />,
  },
  {
    type: "route",
    name: "SellerDetails",
    key: "sellerDetails page",
    route: "/sellerDetails-page",

    component: <SellerDetails />,
  },
  {
    type: "route",
    name: "OrederReturn",
    key: "OrederReturn page",
    route: "/orederReturn-page",

    component: <OrederReturn />,
  },
  {
    type: "route",
    name: "profilePage",
    key: "profile page",
    route: "/profile-page",

    component: <ProfilePage />,
  },
  {
    type: "route",
    name: "userPage",
    key: "register page",
    route: "/register-page",
component: <UserRegister />

  },
  {
    type: "route",
    name: "SelectGlass",
    key: "SelectGlass page",
    route: "/selectGlass-page",

    component: <SelectGlass />,
  },
  {
    type: "route",
    name: "BookingDetails",
    key: "BookingDetails page",
    route: "/bookingDetails-page",

    component: <BookingDetails />,
  },
];
export default routes;
