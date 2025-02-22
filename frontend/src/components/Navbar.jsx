import React from 'react'
import { Button, Container, Flex, HStack, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { useProductStore } from '../store/product';

function Navbar() {

    const { colorMode, toggleColorMode } = useColorMode(); 
   const {products} =  useProductStore()

  return <Container maxW={"1920px"} px={4} /*bg={useColorModeValue("gray.100" , "gray.900")}*/>
  <Flex
      h={16}
      alignItems={"center"}
      justifyContent={"space-between"}
      marginLeft={20}
      marginRight={20}
      flexDir={{
          base: "column",
          sm: "row",
      }}
  >
      <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.700, blue.700)"}
          bgClip={"text"}
      >
          <Link to={"/"}>Product Store</Link>
      </Text>

      <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
              <Button>
                  <PlusSquareIcon fontSize={20} />
              </Button>
          </Link>
          <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}
          </Button>
      </HStack>
  </Flex>
</Container>
}

export default Navbar