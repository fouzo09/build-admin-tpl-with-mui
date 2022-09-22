import { Box, Button, Card, CardContent, Grid, TableCell, TableRow, Typography } from '@mui/material'
import React from 'react'
import AdminTemplate from './AdminTemplate'
import { theme } from '../themes/theme'
import { rates, rateColumns } from '../data/ratesData'
import TableComponent from '../components/TableComponent'
import { currencies, currenciesColumns } from '../data/currenciesData'
import { AddOutlined } from '@mui/icons-material'

const cardTitle = {
    color: '#adb5bd',
    fontSize: '18px',
    fontFamily: theme.fontFamily.police.main,
    borderBottom: '1px solid #adb5bd',
    marginBottom: '32px',
}

const tRowsStyles = {
    '&:nth-of-type(even)':{
        bgcolor: '#f1f3f5'
    }
}

function Config() {
  return (
    <Box>
        <Grid container>
            <Typography component='div' sx={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button startIcon={<AddOutlined />}
                        variant='contained'
                        size='large'
                        sx={{ backgroundColor: 'primary', fontSize: 14, marginBottom: 2, alignSelf: 'flex-end' }}> 
                    Ajouter une devise 
                </Button>
            </Typography> 
        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={7}>
                <Card>
                    <CardContent>
                        <Typography component='p' sx={cardTitle}>
                            Les taux de change du jours
                        </Typography> 
                        <TableComponent titles={rateColumns}>
                            {(rates.length) ? rates.map((item, key)=>( 
                                <TableRow key={key} sx={tRowsStyles}>
                                    <TableCell>{ (key + 1 )}</TableCell>
                                    <TableCell>{ item.C_Currency_ID }</TableCell>
                                    <TableCell>{ item.C_Currency_ID_To }</TableCell>
                                    <TableCell>{ item.ValidFrom }</TableCell>
                                    <TableCell>{ item.ValidTo }</TableCell>
                                    <TableCell>{ item.MultiplyRate }</TableCell>
                                    <TableCell>{ item.marge }</TableCell>
                                </TableRow> 
                            )): <TableRow></TableRow>}
                        </TableComponent>                                                
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={5}>
                <Card>
                    <CardContent>
                        <Typography component='p' sx={cardTitle}>
                            Vos devises de vente et d'achat
                        </Typography> 
                        
                        <TableComponent titles={currenciesColumns}>
                            {(currencies.length) ? currencies.map((item, key)=>( 
                                <TableRow key={key} sx={tRowsStyles}>
                                    <TableCell>{ (key + 1 )}</TableCell>
                                    <TableCell>{ item.ISO_Code }</TableCell>
                                </TableRow> 
                            )): <TableRow></TableRow>}
                        </TableComponent>                                                
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </Box>
  )
}

export default AdminTemplate(Config)
