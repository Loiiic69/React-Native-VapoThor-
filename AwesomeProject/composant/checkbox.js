import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';

const RememberMeCheckbox = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'left', marginLeft: -180 }}>
    <Switch value={rememberMe} onValueChange={handleRememberMe} />
    <Text style={{ marginLeft: 8 }}>Se souvenir de moi</Text>
  </View>
  );
};

export default RememberMeCheckbox;