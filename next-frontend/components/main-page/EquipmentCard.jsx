/*
  This component renders an Equipment Card that is clickable and takes you to the form to schedule equipment.

  Parents -> AvailableServices
*/
"use client";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import { useRouter } from "next/navigation";

function EquipmentCard({ machineName }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/reserve?machine=${encodeURIComponent(machineName)}`);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }} onClick={handleClick}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image=""// TODO fill this with image address of this equipment
            alt="" // TODO fill this with alt text prop for this equipment
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {machineName}
            </Typography>
            {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Insert description of {machineName} here...
            </Typography> // TODO: See if Elena wants descriptions here*/ } 
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default EquipmentCard;