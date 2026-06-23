import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ExpenseItem from './ExpenseItem';

export default function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return (
      <View style={styles.empty}>
        <Text style={styles.emptyText}>No expenses yet. Add one above!</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.list}>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          onDelete={onDelete}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginBottom: 8,
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  emptyText: {
    color: '#999',
    fontSize: 15,
    textAlign: 'center',
  },
});