import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function ExpenseForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  const handleAdd = () => {
    if (!title.trim()) {
      setError('⚠️ Title cannot be empty.');
      return;
    }
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      setError('⚠️ Amount must be a positive number.');
      return;
    }
    if (!category) {
      setError('⚠️ Please select a category.');
      return;
    }
    setError('');
    onAdd({ title, amount, category });
    setTitle('');
    setAmount('');
    setCategory('');
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTag}>NEW RECORD</Text>
        <Text style={styles.cardTitle}>Add Expense</Text>
      </View>

      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Electricity bill"
        placeholderTextColor="#aaa"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. 1500"
        placeholderTextColor="#aaa"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Category</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={category}
          onValueChange={(val) => setCategory(val)}
          style={styles.picker}
        >
          <Picker.Item label="Select category..." value="" />
          <Picker.Item label="🍔  Food" value="Food" />
          <Picker.Item label="🚌  Transport" value="Transport" />
          <Picker.Item label="💡  Utilities" value="Utilities" />
          <Picker.Item label="🎬  Entertainment" value="Entertainment" />
          <Picker.Item label="📦  Other" value="Other" />
        </Picker>
      </View>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Add Expense</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 20,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  cardHeader: {
    marginBottom: 16,
  },
  cardTag: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#6C63FF',
    letterSpacing: 1,
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#64748B',
    marginBottom: 6,
    marginTop: 4,
  },
  input: {
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 12,
    fontSize: 14,
    color: '#0F172A',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  pickerWrapper: {
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 12,
    overflow: 'hidden',
  },
  picker: {
    color: '#0F172A',
  },
  error: {
    color: '#EF4444',
    fontSize: 13,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#0F172A',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    marginTop: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});