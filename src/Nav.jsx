import React from "react";
import {
    Box,
    Popover,
    PopoverTrigger,
    Stack,
    Container
  } from '@chakra-ui/react';
  import { Link } from "react-router-dom";


  const NAV_ITEMS = [
    {
      label: 'Mahasiswa',
      path: "/mahasiswa"
    },
    {
      label: 'Program Studi',
      path: "/major"
    },
    {
      label: 'Dosen',
      path: "/dosen"
    },
    {
      label: 'Tentang Kami',
      path: '/tentangKami'
    },
  ];
const DesktopNav = () => {
    return (
      <Container>
        <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link to={navItem.path}>{navItem.label}</Link>
              </PopoverTrigger>
            </Popover>
          </Box>
        ))}
      </Stack>
      </Container>
    );
  };

  export default DesktopNav;