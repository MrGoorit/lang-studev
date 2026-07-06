import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import HomePage from "@/pages/HomePage";
import UserPage from "@/pages/UserPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />, // 基础布局容器
        children: [
            {
                index: true, // 默认首页
                element: <HomePage />,
            },
						{
							path: "user",
							element: <UserPage />,
						}
        ],
    },
])

export default router;