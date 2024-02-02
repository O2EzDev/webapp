import React from "react";
import UnstyledButton from "../components/common/UnstylesButton";
import CustomInput from "../components/common/CustomInput";
import styles from "../styles/homepage.module.scss";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import GoogleSVG from "../assets/images/googl.svg";
import FacebookSVG from "../assets/images/facebook.svg";
import BTNImage from "../components/common/BTNImage";
import {
  BodyText,
  CaptionText,
  Heading3,
  Heading6,
} from "../components/typography";
import Logo from "../assets/images/logo_O2EZ.png";
import { Box, Button, Input } from "@mui/material";
import CustomButton from "../components/common/CustomButton";
const SignIn = () => {
  const firstBreakPoint = useMediaQuery("(max-width: 820px)");
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Box
      width={"100%"}
      height={"100%"}
      bgcolor={"#FFB527"}
      display={"flex"}
      flexDirection={isMobile ? "column" : "row"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        width={isMobile ? "100%" : "40%"}
        height={isMobile ? "27%" : "100%"}
      >
        <Image
          style={{ marginBottom: isMobile ? "-20px" : "-10px" }}
          src={Logo}
          alt="Logo"
          width={isMobile ? 120 : 180}
          height={isMobile ? 120 : 180}
        />
        <Box width={firstBreakPoint ? "80%" : "50%"} textAlign={"center"}>
          <Heading6 className={styles.title}>
            Are you a Healthcare Professional?
          </Heading6>
        </Box>
        <Button className={styles.btn}>
          <BodyText size="sm" fontWeight="700">
            Log in to O2EZ Pro
          </BodyText>
        </Button>
      </Box>
      <div className={styles.rightBox}>
        <Box
          width={"80%"}
          height={"100%"}
          m={"auto"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box width={"100%"}>
            <Heading3>Log in to O2EZ</Heading3>
            <Box
              display={"flex"}
              gap={"1rem"}
              width={"100%"}
              flexDirection={firstBreakPoint ? "column" : "row"}
            >
              <BTNImage src={GoogleSVG} style={{ flex: 1 }}>
                <BodyText size="sm" fontSize={"12px"}>
                  Sign In with Google
                </BodyText>
              </BTNImage>
              <BTNImage src={FacebookSVG} style={{ flex: 1 }}>
                <BodyText size="sm" fontSize={"12px"}>
                  Sign In with Facebook
                </BodyText>
              </BTNImage>
            </Box>
            <div className={styles.separator}>
              <BodyText size="lg" fontSize="24px">
                &#9135; OR &#9135;
              </BodyText>
            </div>
          </Box>
          <form className={styles.form}>
            <CustomInput
              label="Email Address"
              style={{ flex: 1 }}
              inputStyle={{ width: "100%" }}
            />
            <CustomInput
              label="Password"
              style={{ flex: 1 }}
              inputStyle={{ width: "100%" }}
            />
            <CaptionText
              size="lg"
              style={{ letterSpacing: "1px", cursor: "pointer" }}
            >
              Forgot your password?
            </CaptionText>

            <Box alignSelf={"flex-end"} mt={"30px"} textAlign={"end"}>
              <CustomButton style={{ marginBottom: "10px" }}>
                <BodyText size="sm" fontWeight="700">
                  Log In
                </BodyText>
              </CustomButton>
              <CaptionText size="lg">
                You don't have an account yet? <b> Sign Up</b>
              </CaptionText>
            </Box>
          </form>
        </Box>
      </div>
    </Box>
  );
};

export default SignIn;