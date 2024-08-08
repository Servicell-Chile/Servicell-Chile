App.js_
```
jsx
import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { firebase } from './api/firebase';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <View>
      <Image source={require('./assets/logo.png')} />
      {user ? (
        <HomeScreen user={user} />
      ) : (
        <LoginScreen />
      )}
    </View>
  );
};

export default App;
```

_HomeScreen.js_
```
jsx
import React from 'react';
import { View, Text, Image } from 'react-native';

const HomeScreen = ({ user }) => {
  return (
    <View>
      <Image source={require('./assets/shoopline-logo.png')} />
      <Text>Bienvenido, {user.displayName}!</Text>
    </View>
  );
};

export default HomeScreen;
```

_LoginScreen.js_
```
jsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { firebase } from './api/firebase';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Image source={require('./assets/shoopline-logo.png')} />
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
```

_assets/shoopline-logo.png_