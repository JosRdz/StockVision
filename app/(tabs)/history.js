import { FlatList, StyleSheet, Text, View } from 'react-native';

const alerts = [
  { id: '1', title: '', date: '' },
  { id: '2', title: '', date: '' },
  { id: '3', title: '', date: '' },
];

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      <FlatList
        data={alerts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.alertBox}>
            <Text style={styles.alertTitle}>{item.title}</Text>
            <Text style={styles.alertDate}>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF944D',
    padding: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'white',
  },
  alertBox: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  alertTitle: {
    fontWeight: '600',
    fontSize: 16,
  },
  alertDate: {
    color: 'gray',
    marginTop: 5,
  },
});
