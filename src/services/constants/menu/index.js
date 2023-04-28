import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
export const MENU = [
    {
        title: "Home",
        icon: <HomeIcon />,
        isShow:false,
    },
    {
        title: "User",
        icon: <PersonIcon />,
        isShow:false,
    },
    {
        title: "Servicis",
        icon: <PersonIcon />,
        isShow:false,
        subMenu: [
            {
                title: "Home",
                icon: <HomeIcon />
            },
            {
                title: "User",
                icon: <PersonIcon />
            }
        ]
    }
]