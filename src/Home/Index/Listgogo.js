import React, { useContext } from 'react'
import { Grid, List, ListItem, ListItemButton, Divider, Stack, Typography } from '@mui/material'
import { CategoryContext } from './CategoryContext';





function Listgogo() {

    const { category, setCategory } = useContext(CategoryContext);
    // console.log(category)
    const handleCategoryClick = (categoryName) => {
        setCategory(categoryName);
    };
    // console.log(category)
    return (
        <>
            <nav >
                <List >
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => handleCategoryClick('')} >
                            <Grid container>
                                <Grid item sm={4} sx={{ display: { xs: 'none', sm: 'block' } }}></Grid>
                                <Grid item sm={1}>🐷</Grid>
                                <Grid item sm={1}></Grid>
                                <Grid item sm={6}>綜合</Grid>
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => handleCategoryClick('美食')}>
                            <Grid container>
                                <Grid item sm={4} sx={{ display: { xs: 'none', sm: 'block' } }}></Grid>
                                <Grid item sm={1}>😋</Grid>
                                <Grid item sm={1}></Grid>
                                <Grid item sm={6}>美食</Grid>
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => handleCategoryClick('旅遊')}>
                            <Grid container>
                                <Grid item sm={4} sx={{ display: { xs: 'none', sm: 'block' } }}></Grid>
                                <Grid item sm={1}>✈️</Grid>
                                <Grid item sm={1}></Grid>
                                <Grid item sm={6}>旅遊</Grid>
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => handleCategoryClick('3C')}>
                            <Grid container>
                                <Grid item sm={4} sx={{ display: { xs: 'none', sm: 'block' } }}></Grid>
                                <Grid item sm={1}>🖥️</Grid>
                                <Grid item sm={1}></Grid>
                                <Grid item sm={6}>3C</Grid>
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => handleCategoryClick('美妝')}>
                            <Grid container>
                                <Grid item sm={4} sx={{ display: { xs: 'none', sm: 'block' } }}></Grid>
                                <Grid item sm={1}>💄</Grid>
                                <Grid item sm={1}></Grid>
                                <Grid item sm={6}>美妝</Grid>
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => handleCategoryClick('信用卡')}>
                            <Grid container>
                                <Grid item sm={4} sx={{ display: { xs: 'none', sm: 'block' } }}></Grid>
                                <Grid item sm={1}>💳</Grid>
                                <Grid item sm={1}></Grid>
                                <Grid item sm={6}>信用卡</Grid>
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => handleCategoryClick('信用卡')}>
                            <Grid container>
                                <Grid item sm={4} sx={{ display: { xs: 'none', sm: 'block' } }}></Grid>
                                <Grid item sm={1}>💳</Grid>
                                <Grid item sm={1}></Grid>
                                <Grid item sm={6}>全台</Grid>
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => handleCategoryClick('信用卡')}>
                            <Grid container>
                                <Grid item sm={4} sx={{ display: { xs: 'none', sm: 'block' } }}></Grid>
                                <Grid item sm={1}>💳</Grid>
                                <Grid item sm={1}></Grid>
                                <Grid item sm={6}>信用卡</Grid>
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </ >
    )
}
export default Listgogo