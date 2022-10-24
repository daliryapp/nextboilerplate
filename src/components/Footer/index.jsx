import { Grid, Stack, Typography, Container, Box } from "@mui/material";
import { socialLinks } from "./FooterData";
import { useSelector } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSubscribe } from "_hooks/ContactUs";
import { openToast } from "components/Toast";
import divider from "assets/images/pictures/divider-2.png";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Footer = () => {
  const isMobileSize = useMediaQuery("(max-width:1200px)");
  const footer = useSelector((state) => state);
  const serverData = footer?.footerData;
  const { mutateAsync: postSubScribe, isLoading: loading } = useSubscribe();

  function SocialIcon(props) {
    // Correct! JSX type can be a capitalized variable.
    const SpecificStory = props;
    return <SpecificStory story={props} />;
  }
  const onSubmit = async (values) => {
    const result = await postSubScribe({
      email: values.email,
    });
    if (result?.status >= 200 && result?.status < 300) {
      openToast("success", "Subscribe successfully");
    }
  };
  return (
    <Box
      sx={{
        mt: { xs: 4, md: 4 },
        pt: 14,
        pb: 3,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#111" : "rgb(42 41 41)",
        borderTop: "2px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "#111" : "rgb(42 41 41)",
        position: "relative",
        "&::before": {
          content: '""',
          backgroundImage: `url(${divider.src})`,
          backgroundRepeat: "repeat-x",
          backgroundPosition: "center top",
          height: 15,
          width: "100%",
          position: "absolute",
          top: -3,
          left: 0,
          zIndex: 10,
        },
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          color: "#fff",
          p: 4,
        }}
      >
        <Grid
          container
          sx={{
            pr: { xs: 0, md: 2, lg: 0 },
            pl: { xs: 0, md: 2, lg: 0 },
          }}
        >
          <Grid item xl={12} xs={12} md={12}>
            <Stack
              direction="column"
              sx={{
                width: "100%",
                paddingRight: { xs: 0, sm: 0, md: "0" },
                pb: 8,
                borderBottom: "1px dashed #303335",
                mb: 8,
              }}
            >
              <Typography variant="h4" fontWeight="600" textAlign={"right"}>
                ثبت نام کنید و از سوپرایز های ما باخبر بشید
              </Typography>
              <Typography variant="body2" mt={1} textAlign={"right"}>
                کافیست ایمیل خود را وارد کنید
              </Typography>
            </Stack>
          </Grid>
          <Grid item xl={12} xs={12} md={12}>
            <Stack direction="column" alignItems="flex-start">
              <Typography variant="h6" fontWeight="600" textAlign={"right"}>
                درباره ما
              </Typography>
              <Stack direction="column" alignItems="flex-start">
                <Typography
                  variant="body2"
                  textAlign={"right"}
                  sx={{
                    opacity: 0.6,
                    mt: 4,
                  }}
                >
                  {serverData?.aboutUs}
                </Typography>
              </Stack>
              <Stack
                direction="column"
                spacing={3}
                alignItems="flex-start"
                mt={4}
              >
                <Stack direction="row" alignItems="center">
                  <RoomOutlinedIcon
                    fontSize="small"
                    sx={{
                      color: "primary.main",
                      ml: 1,
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.6,
                    }}
                  >
                    {serverData?.address}
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <LocalPhoneOutlinedIcon
                    fontSize="small"
                    sx={{
                      color: "primary.main",
                      ml: 1,
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.6,
                    }}
                  >
                    {serverData?.tell}
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center">
                  <EmailOutlinedIcon
                    fontSize="small"
                    sx={{
                      color: "primary.main",
                      ml: 1,
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.6,
                    }}
                  >
                    {serverData?.email}
                  </Typography>
                </Stack>
              </Stack>
              <Typography
                variant="h6"
                fontWeight="600"
                textAlign={"right"}
                mt={4}
              >
                ساعات حضور
              </Typography>
              {serverData?.onlineTimes?.map((item, index) => (
                <Stack
                  key={`online-times-${index}`}
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    width: "100%",
                    mt: 3,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.6,
                    }}
                  >
                    {item?.days}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.6,
                    }}
                  >
                    {item?.times}
                  </Typography>
                </Stack>
              ))}

              <Box
                sx={{
                  flexWrap: "wrap",
                  paddingBottom: "20px",
                  marginBottom: "20px",
                  width: "100%",
                  borderBottom: "1px dashed #303335",
                }}
              ></Box>
              <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent={{ xs: "center", md: "center" }}
                sx={{
                  width: "100%",
                  "& a": {
                    ml: 3,
                    opacity: 0.6,
                  },
                }}
              >
                {serverData?.socials?.map(({ name, link }) => (
                  <a href={link} key={name} target="_blank" rel="noreferrer">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        transition: "all 0.2s linear",
                        "& path": {
                          fill: "#fff",
                        },
                        "&:hover": {
                          filter: "brightness(1.1)",
                          boxShadow: "rgba(4, 17, 29, 0.25) 0px 0px 8px 0px",
                        },
                      }}
                    >
                      {SocialIcon(
                        socialLinks.find((e) => e.key === name.toLowerCase())
                          ?.icon
                      )}
                    </Box>
                  </a>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
