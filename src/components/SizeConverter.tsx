import { useState } from 'react';
import { Box, Container, Paper, Stepper, Step, StepLabel, Typography } from '@mui/material';
import { BrandSelector } from './BrandSelector';
import { SizeSelector } from './SizeSelector';
import { ConversionResult } from './ConversionResult';
import { BrandSelection, ConvertedSize } from '../types';
import { shoeData } from '../data/shoeData';

const steps = ['Select Source Brand', 'Choose Your Size', 'Select Target Brand'];

export const SizeConverter = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [sourceBrand, setSourceBrand] = useState<BrandSelection>({ brand: '' });
  const [targetBrand, setTargetBrand] = useState<BrandSelection>({ brand: '' });
  const [selectedSize, setSelectedSize] = useState<number | ''>('');
  const [convertedSize, setConvertedSize] = useState<ConvertedSize | null>(null);

  const handleSourceBrandChange = (selection: BrandSelection) => {
    setSourceBrand(selection);
    setSelectedSize('');
    setConvertedSize(null);
    setActiveStep(1);
  };

  const handleSizeChange = (size: number) => {
    setSelectedSize(size);
    setActiveStep(2);
  };

  const convertSize = (size: number, fromBrand: string, toBrand: string, model: string) => {
    const sourceChart = shoeData.brands[fromBrand].sizeChart;
    const targetBrandData = shoeData.brands[toBrand];
    const targetChart = targetBrandData.sizeChart;

    // Find the EU size for the source US size
    const sourceIndex = sourceChart.US.indexOf(size);
    if (sourceIndex === -1) return;
    const euSize = sourceChart.EU[sourceIndex];

    // Find the closest target US size for the EU size
    const targetIndex = targetChart.EU.findIndex(eu => Math.abs(eu - euSize) <= 0.5);
    if (targetIndex === -1) return;

    setConvertedSize({
      us: targetChart.US[targetIndex],
      eu: targetChart.EU[targetIndex]
    });
  };

  const handleTargetBrandChange = (selection: BrandSelection) => {
    setTargetBrand(selection);
    if (sourceBrand.brand && selectedSize) {
      convertSize(selectedSize, sourceBrand.brand, selection.brand as string, selection.subBrand as string);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Shoe Size Converter
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <BrandSelector
            selectedBrand={sourceBrand}
            onBrandChange={handleSourceBrandChange}
            label="Source Brand"
          />

          {sourceBrand.brand && (
            <SizeSelector
              selectedBrand={sourceBrand}
              selectedSize={selectedSize}
              onSizeChange={handleSizeChange}
            />
          )}

          {selectedSize && (
            <BrandSelector
              selectedBrand={targetBrand}
              onBrandChange={handleTargetBrandChange}
              label="Target Brand"
            />
          )}

          {convertedSize && (
            <ConversionResult
              sourceBrand={sourceBrand}
              targetBrand={targetBrand}
              convertedSize={convertedSize}
            />
          )}
        </Box>
      </Paper>
    </Container>
  );
};