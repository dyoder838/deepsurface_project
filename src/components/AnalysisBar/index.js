import * as React from 'react';

import Fuse from 'fuse.js'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = [{ name: "Microsoft" }, { name: 'Linux'}, { name: 'MacOS' }];


const AnalysisBar = (props) => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        // send data to Analysis page 
        props.analysisBarData(reformattedArray)
        setAnchorElNav(null);

    };

    const options = {
        isCaseSensitive: false,
        findAllMatches: true,
        useExtendedSearch: true,
        keys: [
            "id",
            "risk",
            "identifier",
            "modified",
            "description"
        ]
    };
    // get an array of microsoft CVE 

    // turn the database into Object values so Fuse can read it
    const adjustedDb = Object.values(props.db.db)

    // search for microsoft in the database
    const microsoftSearch = new Fuse(adjustedDb, options);
    const searchTerm = "microsoft";
    
    const microsoftArr = microsoftSearch.search(searchTerm);

    // arrange the array in date order 

    // sort array by item.modified julian date
    microsoftArr.sort(function compare(a, b) {
        // multiply modified value by 1000 to convert to millaseconds for Date() to be accurate
        const aDateConverter = (a.item.modified * 1000)
        const bDateConverter = (b.item.modified * 1000)
        var c = new Date(aDateConverter);
        var d = new Date(bDateConverter);
        return c - d;
    });

    // the component "Chart" cant read nested data, deconstruct objects in the array (get rid of "item")
    console.log("AnalysisBar microsoftArr filtered:", microsoftArr)

    const reformattedArray = microsoftArr.map(item => item.item);

    console.log("AnalysisBar reformatted array:", reformattedArray)
    // populate the date value on the x axis, populate the risk value on the y axis in Chart


    return (

        <AppBar position="static">

            <Container maxWidth="xl">

                <Toolbar disableGutters>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex', lg: 'flex' } }}
                    >
                        CVE Analysis
                    </Typography>

                    {/* responsive menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

                        <IconButton
                            size="large"
                            aria-label="Analysis menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />

                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((index, data) => (
                                <MenuItem key={data} value={index.name} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{index.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>

                    </Box>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        CVE Analysis
                    </Typography>

                    {/* menu buttons */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        {pages.map((index, data) => (
                            <Button
                                key={data}
                                value={index.name}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {index.name}
                            </Button>
                        ))}

                    </Box>

                </Toolbar>

            </Container>

        </AppBar>
    );
};
export default AnalysisBar;