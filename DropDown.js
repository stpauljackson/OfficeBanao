import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Dropdown = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Select an item');
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5','Item 6', 'Item 2', 'Item 3', 'Item 4', 'Item 5','Item 6'];

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleItemSelect = (item) => {
    setSelectedItem(item);
    setDropdownVisible(false);
  };

  return (
    <View style={{height:100,width:'100%'}}>
      <TouchableOpacity onPress={toggleDropdown}>
        <View style={{height:30,width:'100%',marginBottom:10,backgroundColor:'white',paddingHorizontal:5,paddingVertical:3}} >
        <Text>{selectedItem}</Text>
        </View>
      </TouchableOpacity>

      {isDropdownVisible && (
        <View style={{backgroundColor:'white'}}>
          {items.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleItemSelect(item)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Dropdown;
