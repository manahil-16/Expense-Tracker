# 💸 Personal Expense Tracker (Mobile App)

A clean, professional, and fully functional personal expense tracking mobile application built using React Native and Expo. Designed to help users log, manage, and monitor their daily expenses with ease. 
The app features a modern dashboard with live statistics, monthly budget control, category based expense tracking, and real time validation all in a single screen experience optimized for Android devices.

---
📹 Demo

[Watch Demo Video]( https://drive.google.com/file/d/13I-32GhF-q3SBp6DunyKWhVW_mrlXZ2A/view?usp=sharing )

---

## ✨ Features Implemented

| Feature | Details |
|---|---|
| 📊 Dashboard Cards | Live stats Total Spent, Remaining Budget, Transactions, Highest Expense |
| 💰 Budget Control | Set a monthly budget with a live progress bar |
| ⚠️ Over Budget Alert | Card turns red and shows warning when budget is exceeded |
| ➕ Add Expense | Title, Amount (PKR), and Category inputs |
| ✅ Validation | Real-time red error messages for empty/invalid inputs |
| 📋 Expense List | Scrollable list showing title, PKR formatted amount, category badge |
| 🗑️ Delete | Remove any expense instantly |
| 💡 Live Total | Updates automatically on every add and delete |
| 🎨 Color-coded Categories | Each category has a distinct color badge |

---

## 🛠️ Tech Stack & Dependencies

| Package | Purpose |
|---|---|
| React Native | Mobile UI framework |
| Expo SDK 54 | Development platform |
| Expo Router | File based navigation |
| @react-native-picker/picker | Category dropdown |

---

## 🚀 Instructions to Run the Application

### Prerequisites
- Node.js installed on your machine
- Expo Go app installed on your Android device

### Installation & Run

```bash
# 1. Clone the repository
git clone https://github.com/manahil-16/expense-tracker.git

# 2. Navigate to project folder
cd expense-tracker/ExpenseTracker

# 3. Install dependencies
npm install

# 4. Start the development server
npx expo start

# 5. Scan the QR code with Expo Go on your Android device
```

---

## 📁 Project Structure

```
ExpenseTracker/
├── app/
│   ├── index.tsx          # Main screen — dashboard + stats
│   └── _layout.tsx        # Root layout
├── components/
│   ├── ExpenseForm.js     # Add expense form with validation
│   ├── ExpenseItem.js     # Single expense list item
│   └── ExpenseList.js     # Scrollable expense list
├── README.md
└── package.json
```