import { createBrowserRouter } from "react-router-dom";
import StaffsTable from "../components/Admin/StaffsTable";
import NotFound from "../components/NotFound";
import AdminDashboard from "../components/Shared/ChartDashboard";
import CustomerDetailsPage from "../components/Shared/CustomerDetail";
import CustomersTable from "../components/Shared/CustomersTable";
import OrderDetailsPage from "../components/Shared/OrderDetail";
import OrdersTable from "../components/Shared/OrdersTable";
import ProductsTable from "../components/Shared/ProductsTable";
import AdminPage from "../pages/AdminPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";



export const router = createBrowserRouter([
    {
        path: "/admin",
        element: <AdminPage />,
        children: [
            {
                path: "",
                element: <AdminDashboard />,
            },
            {
                path: "dashboard",
                element: <AdminDashboard />,
            },
            {
                path: "orders",
                element: <OrdersTable />,
            },
            {
                path: "order/123",
                element: <OrderDetailsPage />,
            },
            {
                path: "customers",
                element: <CustomersTable />,
            },
            {
                path: "customer/123",
                element: <CustomerDetailsPage />,
            },
            {
                path: "products",
                element: <ProductsTable />,
            },
            {
                path: "staff",
                element: <StaffsTable />,
            },
            {
                path: "*",
                element: <NotFound />,
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    }
]);
