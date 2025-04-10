import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack } from '@mui/material';
import { BrandSelection } from '../types';
import { shoeData } from '../data/shoeData';

export interface BrandSelectorProps {
  selectedBrand: BrandSelection;
  onBrandChange: (selection: BrandSelection) => void;
  label?: string;
}

export const BrandSelector = ({
  selectedBrand,
  onBrandChange,
  label = 'Select Brand'
}: BrandSelectorProps) => {
  const handleBrandChange = (event: SelectChangeEvent<string>) => {
    const brand = event.target.value;
    const firstModel = shoeData.brands[brand]?.models[0]?.name;
    onBrandChange({
      brand,
      subBrand: firstModel
    });
  };

  const handleModelChange = (event: SelectChangeEvent<string>) => {
    onBrandChange({
      ...selectedBrand,
      subBrand: event.target.value
    });
  };

  return (
    <Stack spacing={2}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          value={selectedBrand.brand || ''}
          label={label}
          onChange={handleBrandChange}
        >
          {Object.entries(shoeData.brands).map(([key, brand]) => (
            <MenuItem key={key} value={key}>
              {brand.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selectedBrand.brand && shoeData.brands[selectedBrand.brand]?.models && (
        <FormControl fullWidth>
          <InputLabel>Select Model</InputLabel>
          <Select
            value={selectedBrand.subBrand || ''}
            label="Select Model"
            onChange={handleModelChange}
          >
            {shoeData.brands[selectedBrand.brand].models.map((model) => (
              <MenuItem key={model.name} value={model.name}>
                {model.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </Stack>
  );
};