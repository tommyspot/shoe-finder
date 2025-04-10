import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { BrandSelection } from '../types';
import { shoeData } from '../data/shoeData';

interface SizeSelectorProps {
  selectedBrand: BrandSelection;
  selectedSize: number | '';
  onSizeChange: (size: number) => void;
}

export const SizeSelector = ({
  selectedBrand,
  selectedSize,
  onSizeChange
}: SizeSelectorProps) => {
  const handleSizeChange = (event: SelectChangeEvent<string>) => {
    onSizeChange(Number(event.target.value));
  };

  if (!selectedBrand.brand) return null;

  const brandData = shoeData.brands[selectedBrand.brand];
  const sizeChart = brandData.sizeChart;

  return (
    <FormControl fullWidth>
      <InputLabel>Select Your Size (US)</InputLabel>
      <Select
        value={selectedSize.toString()}
        label="Select Your Size (US)"
        onChange={handleSizeChange}
      >
        {sizeChart.US.map((size, index) => (
          <MenuItem key={size} value={size.toString()}>
            {size} US (EU {sizeChart.EU[index]})
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};