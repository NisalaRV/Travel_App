import { StyleSheet, Text, View,Image, TouchableOpacity  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react'

const Page = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={{ uri: 'https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg' }} 
      />
      <Text style={styles.nameText}>Hashan De Silva</Text>
      <Text style={styles.statusText}>was in Richmond Park</Text>
      <Text style={styles.timeText}>4 minutes ago</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="pencil" size={24} color="#4CAF50" />
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="add-circle" size={24} color="#2196F3" />
          <Text style={styles.buttonText}>Add Pin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="settings" size={24} color="#FF9800" />
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="person-add" size={24} color="#9C27B0" />
          <Text style={styles.buttonText}>Invite a friend</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="log-out" size={24} color="#F44336" />
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  statusText: {
    fontSize: 18,
    color: '#666',
  },
  timeText: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
    marginBottom: 20,
  },
  buttonsContainer: {
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#333',
  },
})