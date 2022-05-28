import type { NextPage } from 'next'
import { Layout } from '../components/layouts'
import { Card, CardContent, CardHeader, Grid } from '@mui/material'
import { EntryList } from '../components/ui'

const HomePage: NextPage = () => {
  return (
    <Layout title="Home - Open Notion">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title="Next Up" />
    
              {/**Agregar una nueva tarea */}
                {/**Listado  de la entradas */}
                <EntryList status='next-up'/>
      
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title="In Progress" />
            <EntryList status='in-progress' />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title="Completed" />
            <EntryList status='completed'/>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomePage
