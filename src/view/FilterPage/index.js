import { Close, ViewStream, Window } from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Rating,
  Select,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Accordions from "../../Components/Accordions";
import RangeSlider from "../../Components/RangeSlider";
import FilterCard from "../../Examples/FilterCard";
import GlassCard from "../../Examples/GlassCard";
import { fatchFrameglasses } from "../../redux/festures/framekartSlice";

const FilterPage = () => {
  const dispatch = useDispatch();
  const { frameglass } = useSelector((state) => ({
    ...state.framekartData,
  }));

  useEffect(() => {
    dispatch(fatchFrameglasses());
  }, [dispatch]);
  return (
    <Container maxWidth="xl" sx={{ bgcolor: "#EFF2F4", height: "auto" }}>
      <Box
        sx={{
          mt: 2,
        }}
      >
        Breadcrumbs
      </Box>
      <Box
        sx={{
          mt: 2,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 2,
        }}
      >
        <Box id="accordions" flex={1} position="sticky" top={"5%"}>
          <Accordions
            name={"Category"}
            details={
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Sunglasses " />
                <FormControlLabel control={<Checkbox />} label="Aviator" />
                <FormControlLabel control={<Checkbox />} label="Square " />
                <FormControlLabel control={<Checkbox />} label="Cat Eye " />
                <FormControlLabel control={<Checkbox />} label="Rimless" />
                <FormControlLabel control={<Checkbox />} label="Sports" />
              </FormGroup>
            }
          />
          <Accordions
            name={"Gender"}
            details={
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Men" />
                <FormControlLabel control={<Checkbox />} label="WOmen" />
                <FormControlLabel control={<Checkbox />} label="Unisex" />
                <FormControlLabel control={<Checkbox />} label="Kids" />
              </FormGroup>
            }
          />
          <Accordions
            name={"Frame Type "}
            details={
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Full Rim " />
                <FormControlLabel control={<Checkbox />} label="Half Rim " />
                <FormControlLabel control={<Checkbox />} label="Rim less" />
              </FormGroup>
            }
          />
          <Accordions
            name={"Frame Shape"}
            details={
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Rectangle " />
                <FormControlLabel control={<Checkbox />} label="Square" />
                <FormControlLabel control={<Checkbox />} label="Round" />
              </FormGroup>
            }
          />
          <Accordions name={"Price range"} details={<RangeSlider />} />
          <Accordions
            name={"Condition"}
            details={
              <FormGroup>
                <RadioGroup>
                  <FormControlLabel control={<Radio />} label="Any" />
                  <FormControlLabel control={<Radio />} label="Refurbished" />
                  <FormControlLabel control={<Radio />} label="Brand new" />
                  <FormControlLabel control={<Radio />} label="Old items" />
                </RadioGroup>
              </FormGroup>
            }
          />
          <Accordions
            name={"Ratings"}
            details={
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label={<Rating name="read-only" value={5} readOnly />}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label={<Rating name="read-only" value={4} readOnly />}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label={<Rating name="read-only" value={3} readOnly />}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label={<Rating name="read-only" value={2} readOnly />}
                />
              </FormGroup>
            }
          />
        </Box>
        <Box id="Cards" flex={4} pb={2}>
          {/* frist line..................<<<<<<< */}
          <Box
            sx={{
              bgcolor: "white",
              display: "flex",
              alignItems: "center",
              padding: "0.6rem 0",
            }}
          >
            <Typography variant="body1" color="initial" flex={2} sx={{ pl: 3 }}>
              12,911 items in Men’s sunglasses
            </Typography>
            <Box
              flex={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FormControlLabel control={<Checkbox />} label="Verified only " />
              <FormControl sx={{ minWidth: 100 }} size="small">
                {/* <OutlinedInput>Size</OutlinedInput> */}
                <Select
                  value={"Size"}
                  label="Size"
                  // onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <ButtonGroup size="small" aria-label="small button group">
                <Button>
                  <Window sx={{ color: 'info.main'}} />
                </Button>
                <Button>
                  <ViewStream sx={{ color: 'info.main'}} />
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
          {/* second line............................<<<<<<<<<<<<<  */}
          <Box
            flexDirection={"row"}
            sx={{
              px: 3,
              bgcolor: "white",
              display: "flex",
              alignItems: "center",
              py: 1,
            
            }}
           
            gap={2}
            marginTop={3}
          >
            <Button variant="outlined" endIcon={<Close />} color="info">
              EyeGlass
            </Button>
            <Button variant="outlined" endIcon={<Close />} color="info">
              EyeGlass
            </Button>
            <Button variant="outlined" endIcon={<Close />} color="info">
              EyeGlass
            </Button>
            <Button variant="outlined" endIcon={<Close />} color="info">
              EyeGlass
            </Button>
            <Button variant="text" color="primary">
              Clear all filter
            </Button>
          </Box>
          {/* third line............................<<<<<<<<<<<<< */}
          <Box
            gap={3}
            sx={{
              mt: 3,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
      
            {frameglass &&
              frameglass.length > 0 &&
              frameglass.map((value) => {
                return <FilterCard value={value?.data} key={value.id} />;
              })}
            {frameglass &&
              frameglass.length > 0 &&
              frameglass.map((value) => {
                return <GlassCard value={value?.data} key={value.id} />;
              })}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default FilterPage;
