import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
export const MENU = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: '/',
        isShow: false,
    },
    {
        title: "User",
        icon: <PersonIcon />,
        link:'/users',
        isShow: false,
    },
    {
        title: "Servicis",
        icon: <PersonIcon />,
        isShow: false,
        link:'/services',
        // subMenu: [
        //     {
        //         title: "Home",
        //         icon: <HomeIcon />
        //     },
        //     {
        //         title: "User",
        //         icon: <PersonIcon />
        //     }
        // ]
    }
]