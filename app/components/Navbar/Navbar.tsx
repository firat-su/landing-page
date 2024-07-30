"use client";

import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Tabs, Tab } from "@mui/material";
import Image from "next/image";

import Link from "next/link";
import React, { useState } from "react";
import theme from "../../theme";
import DrawerComp from "./DrawerComp";

const Navbar = () => {
  const [value, setValue] = useState("0");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const isAboveMedium = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <AppBar position="fixed" sx={{ background: "#ffffff" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Link href="/" onClick={() => setValue("0")}>
          <Image src="/logo.png" width="100" height="92" alt="Logo" />
        </Link>

        {isAboveMedium ? (
          <>
            <Box>
              <Tabs
                value={value}
                onChange={handleChange}
                sx={{ color: "#730202", marginRight: 4 }}
              >
                <Tab component={Link} href="/" label="home" />
                <Tab component={Link} href="/speisekarte" label="speisekarte" />
                <Tab component={Link} href="/services" label="services" />
                <Tab component={Link} href="/about" label="about us" />
                <Tab component={Link} href="/contact" label="contact" />
              </Tabs>
            </Box>

            <Link
              href="https://www.instagram.com/santorinisvechta/"
              target="_blank"
            >
              <Image
                src="/instagramicon.png"
                width="26"
                height="26"
                alt="Instagram"
              />
            </Link>
          </>
        ) : (
          <DrawerComp />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
