import React, { useState } from "react";
import { Container, VStack, HStack, Input, Button, Text, Box, Image, IconButton } from "@chakra-ui/react";
import { FaExchangeAlt } from "react-icons/fa";

const Index = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState("");

  const defaultImage = "https://via.placeholder.com/150";

  const handleAddProduct = () => {
    const image = productImage || defaultImage;
    if (productName && productImage) {
      setProducts([...products, { name: productName, image }]);
      setProductName("");
      setProductImage("");
    }
  };

  const handleSwapRequest = (index) => {
    alert(`Swap request sent for product: ${products[index].name}`);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Product Swap</Text>
        <HStack width="100%">
          <Input placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
          <Input placeholder="Product Image URL" value={productImage} onChange={(e) => setProductImage(e.target.value)} />
          <Button colorScheme="teal" onClick={handleAddProduct}>
            Add Product
          </Button>
        </HStack>
        <VStack spacing={4} width="100%">
          {products.map((product, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="lg" width="100%">
              <HStack justifyContent="space-between">
                <HStack>
                  <Image boxSize="50px" src={product.image} alt={product.name} />
                  <Text>{product.name}</Text>
                </HStack>
                <IconButton aria-label="Swap" icon={<FaExchangeAlt />} onClick={() => handleSwapRequest(index)} />
              </HStack>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
