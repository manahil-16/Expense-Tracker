import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CATEGORY_COLORS = {
  Food: '#4CAF50',
  Transport: '#2196F3',
  Utilities: '#FF9800',
  Entertainment: '#9C27B0',
  Other: '#607D8B',
};

export default function ExpenseItem({ expense, onDelete }) {
  const categoryColor = CATEGORY_COLORS[expense.category] || '#607D8B';

  return (
    <View style={styles.item}>
      <View style={styles.info}>
        <Text style={styles.title}>{expense.title}</Text>
        <Text style={styles.amount}>
          PKR {parseFloat(expense.amount).toLocaleString()}
        </Text>
        <View style={[styles.categoryBadge, { backgroundColor: categoryColor }]}>
          <Text style={styles.categoryText}>{expense.category}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.deleteBtn} onPress={() => onDelete(expense.id)}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 14,
    marginHorizontal: 16,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  amount: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
  },
  categoryText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  deleteBtn: {
    backgroundColor: '#f44336',
    padding: 8,
    borderRadius: 8,
    marginLeft: 10,
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
});