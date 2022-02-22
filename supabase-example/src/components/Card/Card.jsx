import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="body2" component="div" color="blue">
            Titulo:
            <Typography variant="body2" color="Black">
              {titulo} 
              </Typography>
        </Typography>
        <Typography gutterBottom variant="body2" component="div" color="blue">
            Contenido:
            <Typography variant="body2" color="Black">
              {contenido} 
              </Typography>
          </Typography>

          <Typography variant="body2" color="blue">
            Fecha de creacion:
            <Typography variant="body2" color="Black">
              {fechacreacion} 
              </Typography>
          </Typography>
          <Typography variant="body2" color="blue">
            Fecha de Recordatorio:
            <Typography variant="body2" color="Black">
              {fecharecordatorio} 
              </Typography>
          </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
            <Link to="/Recordatorios">
            Editar
            </Link>
            </Button>
        <Button size="small">Borrar</Button>
      </CardActions>
    </Card>
  );
}
