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
import { useQuery } from "@tanstack/react-query";
import { getCities } from "../../api";
import { useSearch } from "../../hooks/useSearch";

type TravelFormProps = {
  createItinerary: (itineraryInput: ItineraryInput) => void;
  isLoading: boolean;
};

function TravelForm({ createItinerary, isLoading }: Readonly<TravelFormProps>) {
  const { control, handleSubmit } = useForm<ItineraryInput>({
    defaultValues: {
      destination: "",
      days: 5,
      travelType: TravelType.SIGHTSEEING,
    },
    mode: "all",
  });

  const { searchTerm, setSearchTerm } = useSearch();

  const { data: cities, isLoading: isCitiesLoading } = useQuery({
    queryKey: [searchTerm],
    queryFn: () => getCities(searchTerm),
    staleTime: Infinity,
  });

  return (
    <Card variant="outlined" sx={{ borderRadius: "2em" }}>
      <CardContent>
        <form onSubmit={handleSubmit(createItinerary)}>
          <Grid container spacing="1em">
            <Grid size={{ xs: 12, md: 3 }}>
              <Controller
                name="destination"
                control={control}
                rules={{ required: "Destination is required" }}
                render={({ field, fieldState }) => (
                  <Autocomplete
                    {...field}
                    loading={isCitiesLoading}
                    freeSolo
                    options={cities?.map((c) => c.name) ?? []}
                    filterOptions={(options, state) => {
                      const input = state.inputValue.toLowerCase();
                      return options.filter(
                        (o) =>
                          o.toLowerCase().includes(input) ||
                          cities
                            ?.find((c) => c.name === o)
                            ?.countryName.toLowerCase()
                            .includes(input)
                      );
                    }}
                    value={field.value}
                    onChange={(_, value) => field.onChange(value)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Destination"
                        error={fieldState.isTouched && !!fieldState.error}
                        helperText={fieldState.error?.message}
                        onChange={(event) => setSearchTerm(event.target.value)}
                      />
                    )}
                    renderOption={({ key, ...props }, option) => (
                      <li
                        key={key}
                        {...props}
                        style={{ display: "flex", whiteSpace: "pre" }}
                      >
                        <Typography>{option}</Typography>
                        <Typography color="grey">
                          {` ${
                            cities?.find((c) => c.name === option)?.countryName
                          }`}
                        </Typography>
                      </li>
                    )}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
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
            <Grid
              size={{ xs: 12, md: 3 }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
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
              size={{ xs: 12, md: 2 }}
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
                disabled={isLoading}
              >
                {isLoading ? "Generating..." : "Generate"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
}

export default TravelForm;
