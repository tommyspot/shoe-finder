import { Card, CardContent, Typography, Box } from '@mui/material';
import { BrandSelection, ConvertedSize } from '../types';
import { shoeData } from '../data/shoeData';

interface ConversionResultProps {
  sourceBrand: BrandSelection;
  targetBrand: BrandSelection;
  convertedSize: ConvertedSize | null;
}

export const ConversionResult = ({
  sourceBrand,
  targetBrand,
  convertedSize
}: ConversionResultProps) => {
  if (!convertedSize || !sourceBrand.brand || !targetBrand.brand) return null;

  const sourceFullName = sourceBrand.subBrand
    ? `${shoeData.brands[sourceBrand.brand].name} ${sourceBrand.subBrand}`
    : shoeData.brands[sourceBrand.brand].name;

  const targetFullName = targetBrand.subBrand
    ? `${shoeData.brands[targetBrand.brand].name} ${targetBrand.subBrand}`
    : shoeData.brands[targetBrand.brand].name;

  return (
    <Card elevation={3}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Size Conversion Result
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="body1" color="text.secondary">
            From: {sourceFullName}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            To: {targetFullName}
          </Typography>
        </Box>
        <Typography variant="h5" align="center">
          {convertedSize.us} US / {convertedSize.eu} EU
        </Typography>
      </CardContent>
    </Card>
  );
};