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
import DifferentStyle from "./view/Categores/DifferentStyle";


const routes =[
    {
        type: "route",
        name: "HomePage",
        key: "home",
        route: "/home-page",
        icon: <Home /> ,
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
        name: "Order Details",
        key: "orderDetails page",
        route: "/orderDetails-page",
        
        component: <OrderDetails />,
      },
    {
        type: "route",
        name: "different Style",
        key: "differentStyle-page",
        route: "/differentStyle-page",
        
        component: <DifferentStyle />,
      },
    

]
export default routes;