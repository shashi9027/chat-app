
import { useFormContext, Controller } from 'react-hook-form';
import { Autocomplete, TextField } from '@mui/material';
import { ReactNode } from 'react';

// ----------------------------------------------------------------------

type RHFAutocomplete = {
  name: string,
  label: string,
  helperText: ReactNode,
  other:any
};

export default function RHFAutocomplete({ name, label, helperText, ...other }: RHFAutocomplete) {
  const { control, setValue } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          {...field}
          fullWidth
          value={typeof field.value === "number" && field.value === 0 ? "" : field.value}
          onChange={(event, newValue) => setValue(name, newValue, { shouldValidate: true })}
          {...other}
          renderInput={(params) => (
            <TextField
              label={label}
              error={!!error}
              helperText={error ? error?.message : helperText}
              {...params}
            />
          )}
          {...other}
        />
      )}
    />
  );
}