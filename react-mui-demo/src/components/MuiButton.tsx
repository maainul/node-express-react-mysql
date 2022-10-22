import React from 'react'
import { Stack, Button } from "@mui/material"

export default function MuiButton() {
    return (
        <Stack spacing={2} direction='row'>
            <Button variant='text'>Text</Button>
            <Button variant='contained'>Text</Button>
            <Button variant='outlined'>Text</Button>
        </Stack>
    )
}


