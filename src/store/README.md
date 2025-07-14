# Redux Store Setup

This project uses Redux Toolkit with Redux Persist and Thunk middleware for state management.

## Structure

```
src/store/
├── index.ts          # Main store configuration
├── hooks.ts          # Typed Redux hooks
├── slices/           # Redux slices
│   ├── authSlice.ts  # Authentication slice
│   └── quizSlice.ts  # Quiz functionality slice
└── README.md         # This file
```

## Features

- **Redux Toolkit**: Modern Redux with simplified setup
- **Redux Persist**: State persistence using AsyncStorage
- **Redux Thunk**: Async action handling (built into Redux Toolkit)
- **TypeScript Support**: Fully typed with custom hooks

## Usage

### 1. Using the Store in Components

```typescript
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { loginUser } from '../store/slices/authSlice';

const MyComponent = () => {
  const dispatch = useAppDispatch();
  const { user, isLoading } = useAppSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(loginUser({ email: 'user@example.com', password: 'password' }));
  };

  return (
    // Your component JSX
  );
};
```

### 2. Creating New Slices

```typescript
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define state interface
interface MyState {
  data: any[];
  isLoading: boolean;
  error: string | null;
}

// Create async thunk
export const fetchData = createAsyncThunk(
  'mySlice/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('your-api-endpoint');
      return response.json();
    } catch (error) {
      return rejectWithValue('Error message');
    }
  }
);

// Create slice
const mySlice = createSlice({
  name: 'mySlice',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  } as MyState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = mySlice.actions;
export default mySlice.reducer;
```

### 3. Adding Slices to Store

1. Create your slice in `src/store/slices/`
2. Import and add to `src/store/index.ts`:

```typescript
import myReducer from './slices/mySlice';

const rootReducer = combineReducers({
  auth: authReducer,
  quiz: quizReducer,
  my: myReducer, // Add your new slice
});
```

3. Add to persist whitelist if needed:

```typescript
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'quiz', 'my'], // Add your slice name
};
```

## Persistence

The store automatically persists the following slices:
- `auth`: User authentication state
- `quiz`: Quiz questions and progress

To add persistence for a new slice, add it to the `whitelist` array in `src/store/index.ts`.

## Best Practices

1. **Use Typed Hooks**: Always use `useAppDispatch` and `useAppSelector` instead of the plain Redux hooks
2. **Async Actions**: Use `createAsyncThunk` for API calls
3. **Error Handling**: Always handle loading and error states in your slices
4. **State Structure**: Keep state normalized and avoid deeply nested objects
5. **Selectors**: Use selectors for complex state calculations

## Example Component

See `src/Component/ExampleReduxComponent.tsx` for a complete example of how to use the Redux store in a React Native component.

## Available Actions

### Auth Slice
- `loginUser(credentials)`: Async action to login user
- `logout()`: Clear user data
- `clearError()`: Clear error state
- `setUser(user)`: Set user data manually

### Quiz Slice
- `fetchQuestions()`: Async action to fetch quiz questions
- `nextQuestion()`: Move to next question
- `previousQuestion()`: Move to previous question
- `submitAnswer(answer)`: Submit an answer
- `resetQuiz()`: Reset quiz state
- `setQuestions(questions)`: Set questions manually 