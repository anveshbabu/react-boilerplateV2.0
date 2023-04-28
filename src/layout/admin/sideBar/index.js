import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Collapse from '@mui/material/Collapse';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Outlet } from "react-router-dom";
import { MENU } from '../../../services/constants'
const drawerWidth = 240;

export default function SideBar(props) {
    const [, forceUpdate] = React.useState();
    const [menuList, setMenuList] = React.useState(MENU);
    let {
        header = '',
        isShowMenu = false
    } = props;


    const handleMenuToogle = (i) => {
        MENU.at(i).isShow = !MENU.at(i).isShow;
        setMenuList([...MENU])
        forceUpdate()
    }


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            {header}
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    display: { xs: !isShowMenu && 'none', sm: 'block' },
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {menuList.map(({ title = '', icon, isShow = false, subMenu = [] }, index) => (
                            <React.Fragment>
                                <ListItem key={title} disablePadding>
                                    <ListItemButton onClick={() => handleMenuToogle(index)}>
                                        <ListItemIcon >
                                            {icon}
                                        </ListItemIcon>
                                        <ListItemText primary={title} />
                                        {subMenu.length > 0 && <React.Fragment>
                                            {isShow ? <ExpandLess /> : <ExpandMore />}
                                        </React.Fragment>}
                                    </ListItemButton>
                                </ListItem>
                                <Collapse in={isShow} timeout="auto" unmountOnExit>
                                    {subMenu?.map(({ title }) =>
                                        <List component="div" disablePadding key={title}>
                                            <ListItemButton sx={{ pl: 4 }}>
                                                <ListItemIcon>
                                                    <StarBorder />
                                                </ListItemIcon>
                                                <ListItemText primary={title} />
                                            </ListItemButton>
                                        </List>)}
                                </Collapse>
                            </React.Fragment>
                        ))}

                    </List>
                    {/* <Divider /> */}
                   
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 11 }}>
            <Outlet />
            </Box>
        </Box>
    );
}