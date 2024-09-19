import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import { LoggedUserTabs } from './src/navigation/bottomTabNavigator';


export default function App() {
  const [citation, setCitation] = useState('');
  const [personnage, setPersonnage] = useState('');

  const fetchCitation = () => {
    fetch('https://cors-anywhere.herokuapp.com/https://kaamelott.chaudie.re/api/random')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.citation);
        setCitation(data.citation.citation);
        setPersonnage(data.citation.infos.personnage);
      })
      .catch((error) => console.error('Erreur lors de la récupération de la citation:', error));
  };

  useEffect(() => {
    fetchCitation();
  }, []);

  return (
      <ImageBackground
        source={{ uri: 'https://static.actu.fr/uploads/2021/07/kaamelott-paris-cinema-avant-premiere-alexandre-astier-roi-arthur-sage-trilogie-1-960x640.jpg' }} // Remplacer par une image médiévale
        style={styles.background}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Kaamelott Citation</Text>
          <Text style={styles.quote}>"{citation}"</Text>
          {personnage ? <Text style={styles.character}>- {personnage}</Text> : null}

          <View style={styles.buttonContainer}>
            <Button title="Nouvelle citation" onPress={fetchCitation} color="#FFD700" />
          </View>

          <StatusBar style="auto" />
        </View>
        {/* <LoggedUserTabs /> */}
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#FFD700',
    fontWeight: 'bold',
    fontFamily: 'serif',
    marginBottom: 30,
  },
  quote: {
    fontSize: 24,
    color: '#fff',
    fontStyle: 'italic',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
    fontFamily: 'serif',
  },
  character: {
    fontSize: 20,
    color: '#FFD700',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'serif',
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
  },
});
