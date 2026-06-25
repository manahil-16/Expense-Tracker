import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CATEGORY_COLORS = {
  Food: '#10B981',
  Transport: '#0EA5E9',
  Utilities: '#F59E0B',
  Entertainment: '#8B5CF6',
  Other: '#6C63FF',
};

const CATEGORY_ICONS = {
  Food: '🍔',
  Transport: '🚌',
  Utilities: '💡',
  Entertainment: '🎬',
  Other: '📦',
};

export default function ExpenseItem({ expense, onDelete }) {
  const categoryColor = CATEGORY_COLORS[expense.category] || '#6C63FF';
  const categoryIcon = CATEGORY_ICONS[expense.category] || '📦';

  return (
    <View style={styles.item}>
      <View style={[styles.iconBox, { backgroundColor: categoryColor + '20' }]}>
        <Text style={styles.icon}>{categoryIcon}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{expense.title}</Text>
        <View style={[styles.badge, { backgroundColor: categoryColor + '20' }]}>
          <Text style={[styles.badgeText, { color: categoryColor }]}>
            {expense.category}
          </Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.amount}>
          PKR {parseFloat(expense.amount).toLocaleString()}
        </Text>
        <TouchableOpacity style={styles.deleteBtn} onPress={() => onDelete(expense.id)}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 14,
    marginHorizontal: 16,
    marginBottom: 10,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  icon: {
    fontSize: 20,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 5,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  right: {
    alignItems: 'flex-end',
    gap: 8,
  },
  amount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  deleteBtn: {
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  deleteText: {
    color: '#EF4444',
    fontSize: 12,
    fontWeight: 'bold',
  },
});