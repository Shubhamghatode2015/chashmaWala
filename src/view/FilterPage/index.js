import {
  Close,
  ExitToApp,
  FilterAlt,
  SwapVert,
  ViewStream,
  Window,
} from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Rating,
  Select,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { Box, C, TabPanelontainer } from "@mui/system";
import React, { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Accordions from "../../Components/Accordions";
import DownDrawer from "../../Components/Drawer/MobileDown";
import MobileFilter from "../../Components/Drawer/MobileFilter";
import MobileLeft from "../../Components/Drawer/MobileLeft";
import RangeSlider from "../../Components/RangeSlider";
import FilterCard from "../../Examples/FilterCard";
import GlassCard from "../../Examples/GlassCard";
// import ResponsiveWishlistCard from "../../Examples/ResponsiveWishlistCard";
import WishCard from "../../Examples/WishCard";
import { fatchFrameglasses } from "../../redux/festures/framekartSlice";
import { useLocation } from "react-router-dom";

const FilterPage = () => {
  const [downOpen, setDownOpen] = useState(false);
  const [downOpen1, setDownOpen1] = useState(false);
  const [leftOpen, setLeftOpen] = useState(false);
  const dispatch = useDispatch();
  const { frameglass } = useSelector((state) => ({
    ...state.framekartData,
  }));

  useEffect(() => {
    dispatch(fatchFrameglasses());
  }, [dispatch]);

  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }
const location= useLocation();
  console.log(location.pathname)
  return (
    <>
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
            flexDirection: { xs: "column", md: "row", xl: "row" },
          }}
        >
          {/* mobile view.................................................................... */}
          <Box
            sx={{
              display: { xs: "flex", md: "none", xl: "none" },
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Stack spacing={5} direction={"row"} fullWidth>
              <Button
                variant="outlined"
                color="primary"
                flex={5}
                fullWidth
                onClick={() => setDownOpen(true)}
              >
                Gender
              </Button>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<SwapVert />}
                fullWidth
                onClick={() => setDownOpen1(true)}
              >
                Sort
              </Button>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<FilterAlt />}
                fullWidth
                onClick={() => setLeftOpen(true)}
              >
                Filters
              </Button>
            </Stack>
          </Box>

          {/* dextop view................................................ */}
          <Box
            id="accordions"
            flex={1}
            position="sticky"
            top={"5%"}
            sx={{ display: { xs: "none", md: "block", xl: "block" } }}
          >
            <Accordions
              name={"Category"}
              details={
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Sunglasses "
                  />
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
          <Box
            id="Cards"
            flex={{ xs: 0, md: 4, xl: 4 }}
            pb={2}
            sx={{
              width: { xs: "100%" },
            }}
          >
            {/* frist line......................................................<<<<<<< */}
            <Box
              sx={{
                bgcolor: "white",
                display: { xs: "none", md: "flex", xl: "flex" },
                alignItems: "center",
                padding: "0.6rem 0",
              }}
            >
              <Typography
                variant="body1"
                color="initial"
                flex={2}
                sx={{ pl: 3, display: { xs: "none", md: "flex", xl: "flex" } }}
              >
                12,911 items in Men’s sunglasses
              </Typography>
              <Box
                flex={2}
                sx={{
                  display: { xs: "none", md: "flex", xl: "flex" },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FormControlLabel
                  control={<Checkbox />}
                  label="Verified only "
                />
                <FormControl sx={{ minWidth: 100 }} size="small">
                  {/* <OutlinedInput>Size</OutlinedInput> */}
                  <Select value={"Size"} label="Size" onChange={handleChange}>
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
                    <Window sx={{ color: "info.main" }} />
                  </Button>
                  <Button>
                    <ViewStream sx={{ color: "info.main" }} />
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
                display: { xs: "none", md: "flex", xl: "flex" },
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
                display: { xs: "none", md: "flex", xl: "flex" },
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
            {/* mobile viwe.............................................>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <Box
              sx={{
                mt: 3,
                width: "100%",
                height: "100%",
                display: { xs: "flex", md: "none", xl: "none" },
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexWrap: "wrap",
                flexDiretion: "row", gap: 1
              }}
            >
              {frameglass &&
                frameglass.length > 0 &&
                frameglass.map((value) => {
                  return <Box sx={{ height: 250, width: 185}}>
                    <WishCard value={value?.data} key={value.id} />
                  </Box>
                })}
              {frameglass &&
                frameglass.length > 0 &&
                frameglass.map((value) => {
                  return <Box sx={{ height: 250, width: 185}}>
                  <WishCard value={value?.data} key={value.id} />
                </Box>;
                })}
            </Box>
          </Box>
        </Box>
      </Container>
      <DownDrawer state={downOpen} setState={setDownOpen}>
        <Box sx={{ textAlign: "center", height: "100%" }}>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              Gender
            </FormLabel>
            <RadioGroup
              sx={{ mt: 2 }}
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </Box>
      </DownDrawer>
      <DownDrawer state={downOpen1} setState={setDownOpen1}>
        <Box sx={{ textAlign: "center", height: "100%" }}>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              {" "}
              <img
                src={require("../../assets/icons/Swap.png")}
                style={{ width: "25px", height: "25px", marginRight: "0.3rem" }}
              />{" "}
              Sort by
            </FormLabel>
            <RadioGroup
              sx={{ mt: 2, textAlign: "left" }}
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="Low to Hign"
                control={<Radio />}
                label="Low to Hign"
              />
              <FormControlLabel
                value="High to Low"
                control={<Radio />}
                label="High to Low"
              />
              <FormControlLabel
                value="New arrival"
                control={<Radio />}
                label="New arrival"
              />
              <FormControlLabel
                value="Average customer review"
                control={<Radio />}
                label="Average customer review"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </DownDrawer>
      <MobileFilter state={leftOpen} setState={setLeftOpen}>
        <Box sx={{ width: "100%", height: "100%" }}>
          <Box sx={{ width: "100%", position: "relative" }}>
            <ExitToApp
              sx={{
                position: "absolute",
                top: 0,
                right: "3%",
                transform: "scale(-1, 1)",
                fontSize: 30,
              }}
              onClick={() => setLeftOpen(false)}
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                flexGrow: 1,
                bgcolor: "background.paper",
                display: "flex",
                height: 1000,
                p: 3,
              }}
            >
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider" }}
              >
                <Tab label="Frame Type" {...a11yProps(0)} />
                <Tab label="Frame Shape" {...a11yProps(1)} />
                <Tab label="Frame Color" {...a11yProps(2)} />
                <Tab label="Brands" {...a11yProps(3)} />
                <Tab label="Price" {...a11yProps(4)} />
                <Tab label="Gender" {...a11yProps(5)} />
              </Tabs>
              <TabPanel value={value} index={0}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox defaultChecked style={{ color: "#fcd635" }} />
                    }
                    label="Men"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox defaultChecked style={{ color: "#fcd635" }} />
                    }
                    label="Women"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox defaultChecked style={{ color: "#fcd635" }} />
                    }
                    label="Children "
                  />
                </FormGroup>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox defaultChecked style={{ color: "#fcd635" }} />
                    }
                    label="Recommended"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox defaultChecked style={{ color: "#fcd635" }} />
                    }
                    label="Popularity"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox defaultChecked style={{ color: "#fcd635" }} />
                    }
                    label="Low to High "
                  />
                  <FormControlLabel
                    control={
                      <Checkbox defaultChecked style={{ color: "#fcd635" }} />
                    }
                    label="High to Low"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox defaultChecked style={{ color: "#fcd635" }} />
                    }
                    label="Label"
                  />
                </FormGroup>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox defaultChecked style={{ color: "#fcd635" }} />
                    }
                    label="upto - 1000"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox defaultChecked style={{ color: "#fcd635" }} />
                    }
                    label="upto - 2000"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox defaultChecked style={{ color: "#fcd635" }} />
                    }
                    label="upto- 5000 "
                  />
                </FormGroup>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox defaultChecked style={{ color: "#fcd635" }} />
                    }
                    label="1 star"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox defaultChecked style={{ color: "#fcd635" }} />
                    }
                    label="2 star"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox defaultChecked style={{ color: "#fcd635" }} />
                    }
                    label="3 star"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox defaultChecked style={{ color: "#fcd635" }} />
                    }
                    label="4 star"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox defaultChecked style={{ color: "#fcd635" }} />
                    }
                    label="5 star "
                  />
                </FormGroup>
              </TabPanel>
            </Box>
          </Box>
        </Box>
      </MobileFilter>
    </>
  );
};

export default FilterPage;
