import React, { useState } from 'react';
import { Container, VStack, HStack, Button, Input, Select, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Text } from "@chakra-ui/react";

const Index = () => {
  const [items, setItems] = useState([{ question: '', answer: '' }]);
  const [test, setTest] = useState('');
  const [age, setAge] = useState('');
  const [precision, setPrecision] = useState('');

  const handleAddItem = () => {
    setItems([...items, { question: '', answer: '' }]);
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const handleSubmit = () => {
    const formData = {
      test,
      age,
      items,
      precision,
    };
    console.log('Form Data:', formData);
  };

  const handleCancel = () => {
    setTest('');
    setAge('');
    setItems([{ question: '', answer: '' }]);
    setPrecision('');
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Select placeholder="Select Test" value={test} onChange={(e) => setTest(e.target.value)}>
          <option value="test1">Test 1</option>
          <option value="test2">Test 2</option>
          <option value="test3">Test 3</option>
        </Select>
        <NumberInput value={age} onChange={(valueString) => setAge(valueString)}>
          <NumberInputField placeholder="Age" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        {items.map((item, index) => (
          <HStack key={index} spacing={4} width="100%">
            <Input placeholder="Question" value={item.question} onChange={(e) => handleItemChange(index, 'question', e.target.value)} />
            <Input placeholder="Answer" value={item.answer} onChange={(e) => handleItemChange(index, 'answer', e.target.value)} />
          </HStack>
        ))}
        <Button onClick={handleAddItem}>Add Item</Button>
        <NumberInput value={precision} onChange={(valueString) => setPrecision(valueString)}>
          <NumberInputField placeholder="Precision" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <HStack spacing={4}>
          <Button colorScheme="blue" onClick={handleSubmit}>Valider</Button>
          <Button colorScheme="red" onClick={handleCancel}>Annuler</Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;