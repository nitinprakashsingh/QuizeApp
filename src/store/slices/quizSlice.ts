import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// Define interfaces
interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuizState {
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  isLoading: boolean;
  error: string | null;
  quizCompleted: boolean;
}

// Initial state
const initialState: QuizState = {
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  isLoading: false,
  error: null,
  quizCompleted: false,
};

// Async thunk for fetching questions
export const fetchQuestions = createAsyncThunk(
  'quiz/fetchQuestions',
  async (_, { rejectWithValue }) => {
    try {
      // Replace with your actual API call
      const response = await fetch('your-api-endpoint/questions');
      const data = await response.json();
      
      if (!response.ok) {
        return rejectWithValue(data.message || 'Failed to fetch questions');
      }
      
      return data;
    } catch (error) {
      return rejectWithValue('Network error');
    }
  }
);

// Create the slice
const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      } else {
        state.quizCompleted = true;
      }
    },
    previousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
    submitAnswer: (state, action: PayloadAction<string>) => {
      const currentQuestion = state.questions[state.currentQuestionIndex];
      if (action.payload === currentQuestion.correctAnswer) {
        state.score += 1;
      }
    },
    resetQuiz: (state) => {
      state.currentQuestionIndex = 0;
      state.score = 0;
      state.quizCompleted = false;
    },
    setQuestions: (state, action: PayloadAction<Question[]>) => {
      state.questions = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.questions = action.payload;
        state.error = null;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

// Export actions
export const { 
  nextQuestion, 
  previousQuestion, 
  submitAnswer, 
  resetQuiz, 
  setQuestions 
} = quizSlice.actions;

// Export reducer
export default quizSlice.reducer; 