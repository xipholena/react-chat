import { Grid2, List, ListItem, Typography } from '@mui/material';
import React from 'react';

export function Messages({ events }: { events: any[] }) {
    return (
        <Grid2 container spacing={2} alignItems="start">
            <Typography component="h1">Messages</Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
                events.map((event, index) =>
                    <ListItem key={ index }>
                        <span>{ event?.content?.name } says:</span>
                        <span>{ event?.content?.message }</span>
                        
                        </ListItem>
                )
            }
            </List>
        </Grid2>
    );
}
