import { FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { useEffect, useState } from 'react';

export default function TabTwoScreen() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState('')

  const fetchCharacters = async (pageNumber: string) => {
    try {
      const response = await fetch(`https://dragonball-api.com/api/characters?page=${pageNumber}`)
      const data = await response.json()
      setCharacters(data.items)
      console.log(data.items)
    } catch (error) {
      console.error("Erro ao buscar personagens:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCharacters(page)
  }, [page])

  const cards = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.wrapImg}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.text}>{item.race}</Text>
        <Text style={styles.text2}>{item.affiliation}</Text>
      </View>
    </View>
  )


  return (
    <>
      {loading ?
        (<View style={styles.wrapLoading}>
          <Image style={styles.ldngImg} source={require('@/assets/images/loadingPageIMage.webp')} />
          <Text style={styles.loadingText}>CARREGANDO...</Text>
        </View>)
        :
        (<View style={styles.container}>
          <Text style={styles.title}>Lista de Cards</Text>
          <Text style={styles.subtitle}>Personagens de Dragon Ball</Text>
          <Text style={styles.subtitle2}>Insira uma página - atual: {page}</Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            placeholder='1/6'
            value={page}
            onChangeText={(value) => setPage(value)}
          />
          <FlatList
            style={styles.flat}
            data={characters}
            renderItem={cards}
            keyExtractor={(item: any) => item.id.toString()}
          />
        </View>)}

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c37704',
  },
  flat: {
    paddingHorizontal: 5
  },
  wrapLoading: {
    flex: 1,
    backgroundColor: '#090546',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30
  },
  loadingText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 18,
    textShadowColor: '#ffffff',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontWeight: 'bold'
  },
  ldngImg: {
    width: 300,
    height: 300,
    borderRadius: 999,
    borderWidth: 6,
    borderColor: '#e79418',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fffdf5',
    backgroundColor: '#090546',
    paddingTop: 10,
    paddingHorizontal: 16,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    paddingTop: 10,
    color: '#fffdf5',
    textAlign: 'center',
    backgroundColor: '#090546',
    paddingHorizontal: 16,
  },
  subtitle2: {
    paddingTop: 10,
    paddingHorizontal: 16,
    color: '#fffdf5a1',
    textAlign: 'center',
    backgroundColor: '#090546',
    fontSize: 12,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#090546',
    borderWidth: 10,
    padding: 10,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 22
  },
  card: {
    backgroundColor: '#fff',
    width: 350,
    minHeight: 600,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 2.25,
    shadowRadius: 10.84,
    elevation: 5,
    borderWidth: 14,
    borderColor: '#090546',
  },
  wrapImg: {
    width: 350,
    height: 500,
    alignItems: 'center',
    borderWidth: 14,
    borderColor: '#090546',
  },
  image: {
    width: 350,
    height: 500,
  },
  cardInfo: {
    // borderWidth: 14,
    // borderColor: '#e79418',
    padding: 20,
    width: '100%',
    borderWidth: 14,
    borderColor: '#0e7dd7c7',
  },
  name: {
    fontSize: 22,
    fontWeight: 900,
    marginBottom: 5,
    color: '#e79418',
  },
  text: {
    fontSize: 16,
    color: '#090546',
    fontWeight: 500,
  },
  text2: {
    fontSize: 12,
    color: '#0e7dd7c7',
    fontWeight: 900,
  }
});
