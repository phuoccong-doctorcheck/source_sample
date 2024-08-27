
import CommingSoon from "../components/CommingSoon"
import PublicLayout from "../layouts/PublicLayout"
import HomePage from "../pages/HomePage"

const routes: any[] = [
    {
        path: "/",
        component: HomePage,
        layout: PublicLayout,    
    },
    
    {
        path: "*",
        component: CommingSoon,
        layout: PublicLayout,    
    },
]

export  { routes }