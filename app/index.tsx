import { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, StatusBar, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);
  const [budgetInput, setBudgetInput] = useState('');
  const [budgetSet, setBudgetSet] = useState(false);

  const addExpense = (expense: any) => {
    setExpenses([{ id: Date.now(), ...expense }, ...expenses]);
  };

  const deleteExpense = (id: any) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const saveBudget = () => {
    if (budgetInput && parseFloat(budgetInput) > 0) {
      setBudget(parseFloat(budgetInput));
      setBudgetSet(true);
    }
  };

  const total = expenses.reduce((sum, e) => sum + parseFloat(e.amount), 0);
  const count = expenses.length;
  const highest = expenses.length > 0 ? Math.max(...expenses.map(e => parseFloat(e.amount))) : 0;
  const remaining = budget - total;
  const progress = budget > 0 ? Math.min((total / budget) * 100, 100) : 0;
  const isOverBudget = total > budget && budget > 0;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0F172A" />

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.appName}>MyExpenses</Text>
          <Text style={styles.appSubtitle}>Personal Finance Tracker</Text>
        </View>
        <View style={styles.avatarBox}>
          <Text style={styles.avatarText}>ME</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Stats Cards */}
        <View style={styles.statsRow}>
          <View style={[styles.statCard, { backgroundColor: '#6C63FF' }]}>
            <Text style={styles.statLabel}>Total Spent</Text>
            <Text style={styles.statValue}>PKR {total.toLocaleString()}</Text>
            <Text style={styles.statSub}>All recorded expenses</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: isOverBudget ? '#EF4444' : '#10B981' }]}>
            <Text style={styles.statLabel}>Remaining</Text>
            <Text style={styles.statValue}>PKR {budget > 0 ? remaining.toLocaleString() : '—'}</Text>
            <Text style={styles.statSub}>{isOverBudget ? '⚠️ Over budget!' : 'Budget left'}</Text>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={[styles.statCard, { backgroundColor: '#0EA5E9' }]}>
            <Text style={styles.statLabel}>Transactions</Text>
            <Text style={styles.statValue}>{count}</Text>
            <Text style={styles.statSub}>Total entries</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: '#F59E0B' }]}>
            <Text style={styles.statLabel}>Highest</Text>
            <Text style={styles.statValue}>PKR {highest.toLocaleString()}</Text>
            <Text style={styles.statSub}>Single expense</Text>
          </View>
        </View>

        {/* Budget Card */}
        <View style={styles.budgetCard}>
          <View style={styles.budgetHeader}>
            <Text style={styles.budgetTag}>PLANNING</Text>
            <Text style={styles.budgetTitle}>Budget Control</Text>
          </View>
          <Text style={styles.budgetLabel}>Monthly Budget</Text>
          <View style={styles.budgetInputRow}>
            <TextInput
              style={styles.budgetInput}
              placeholder="e.g. 50000"
              placeholderTextColor="#aaa"
              value={budgetInput}
              onChangeText={setBudgetInput}
              keyboardType="numeric"
            />
            <TouchableOpacity style={styles.saveBtn} onPress={saveBudget}>
              <Text style={styles.saveBtnText}>Save</Text>
            </TouchableOpacity>
          </View>
          {budget > 0 && (
            <>
              <View style={styles.progressBg}>
                <View style={[styles.progressFill, {
                  width: `${progress}%`,
                  backgroundColor: isOverBudget ? '#EF4444' : '#6C63FF'
                }]} />
              </View>
              <Text style={[styles.budgetStatus, { color: isOverBudget ? '#EF4444' : '#10B981' }]}>
                {isOverBudget
                  ? `⚠️ PKR ${Math.abs(remaining).toLocaleString()} over budget!`
                  : `✅ PKR ${remaining.toLocaleString()} left this month`}
              </Text>
            </>
          )}
        </View>

        {/* Form */}
        <ExpenseForm onAdd={addExpense} />

        {/* List */}
        <ExpenseList expenses={expenses} onDelete={deleteExpense} />

        {/* Total Footer */}
        <View style={styles.totalCard}>
          <Text style={styles.totalLabel}>💰 Total Spent</Text>
          <Text style={styles.totalValue}>PKR {total.toLocaleString()}</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  header: {
    backgroundColor: '#0F172A',
    paddingHorizontal: 20,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  appSubtitle: {
    fontSize: 12,
    color: '#94A3B8',
    marginTop: 2,
  },
  avatarBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#6C63FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  statsRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 12,
    marginTop: 12,
  },
  statCard: {
    flex: 1,
    borderRadius: 16,
    padding: 16,
  },
  statLabel: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.8)',
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  statSub: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.7)',
  },
  budgetCard: {
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
  budgetHeader: {
    marginBottom: 14,
  },
  budgetTag: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#10B981',
    letterSpacing: 1,
    marginBottom: 4,
  },
  budgetTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  budgetLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#64748B',
    marginBottom: 8,
  },
  budgetInputRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 14,
  },
  budgetInput: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 12,
    fontSize: 14,
    color: '#0F172A',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  saveBtn: {
    backgroundColor: '#0F172A',
    borderRadius: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  progressBg: {
    height: 8,
    backgroundColor: '#E2E8F0',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  progressFill: {
    height: 8,
    borderRadius: 10,
  },
  budgetStatus: {
    fontSize: 13,
    fontWeight: '600',
  },
  totalCard: {
    backgroundColor: '#0F172A',
    margin: 16,
    borderRadius: 16,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  totalLabel: {
    fontSize: 16,
    color: '#94A3B8',
    fontWeight: '600',
  },
  totalValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});