import {
  Autocomplete,
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { TravelType, type ItineraryInput } from "../../types/travel";
import { useForm, Controller } from "react-hook-form";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

type TravelFormProps = {
  createItinerary: (itineraryInput: ItineraryInput) => void;
};

function TravelForm({ createItinerary }: Readonly<TravelFormProps>) {
  const cities: string[] = ["San Francisco", "Budapest", "New York"];

  const { control, handleSubmit } = useForm<ItineraryInput>({
    defaultValues: {
      destination: "",
      days: 5,
      travelType: TravelType.SIGHTSEEING,
    },
    mode: "all",
  });

  return (
    <Card variant="outlined" sx={{ borderRadius: "2em" }}>
      <CardContent>
        <form onSubmit={handleSubmit(createItinerary)}>
          <Grid container spacing="1em">
            <Grid size={{ xs: 12, lg: 3 }}>
              <Controller
                name="destination"
                control={control}
                rules={{ required: "Destination is required" }}
                render={({ field, fieldState }) => (
                  <Autocomplete
                    {...field}
                    options={cities}
                    value={field.value}
                    onChange={(_, value) => field.onChange(value)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Destination"
                        error={fieldState.isTouched && !!fieldState.error}
                        helperText={fieldState.error?.message}
                      />
                    )}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Controller
                name="days"
                control={control}
                rules={{
                  required: "Number of days is required",
                  min: { value: 1, message: "At least 1 day required" },
                  max: { value: 30, message: "Maximum 30 days allowed" },
                }}
                render={({ field }) => (
                  <FormControl fullWidth>
                    <Typography id="input-slider" gutterBottom>
                      Number of days
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid size={10}>
                        <Slider
                          {...field}
                          aria-label="Number of days"
                          defaultValue={5}
                          step={1}
                          min={1}
                          max={30}
                          marks
                        />
                      </Grid>
                      <Grid size={2}>
                        <Input
                          {...field}
                          size="small"
                          inputProps={{
                            step: 1,
                            min: 1,
                            max: 30,
                            type: "number",
                            "aria-labelledby": "input-slider",
                          }}
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 3 }}>
              <Controller
                name="travelType"
                control={control}
                rules={{ required: "Travel type is required" }}
                render={({ field }) => (
                  <FormControl fullWidth>
                    <InputLabel id="traveltype-select-label">
                      Travel type
                    </InputLabel>
                    <Select
                      {...field}
                      value={field.value}
                      onChange={(e) => {
                        field.onChange(e.target.value);
                      }}
                      labelId="traveltype-select-label"
                      label="Travel type"
                    >
                      {Object.values(TravelType).map((v) => {
                        return (
                          <MenuItem key={v} value={v}>
                            {v}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                )}
              />
            </Grid>
            <Grid
              size={{ xs: 12, lg: 2 }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                startIcon={<AutoAwesomeIcon />}
                type="submit"
                variant="contained"
                color="primary"
              >
                Generate
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
}

export default TravelForm;
