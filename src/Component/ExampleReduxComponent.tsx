import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { loginUser, logout } from '../store/slices/authSlice';
import { fetchQuestions, nextQuestion, submitAnswer } from '../store/slices/quizSlice';

const ExampleReduxComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  
  // Select state from store
  const { user, isLoading, error } = useAppSelector((state) => state.auth);
  const { questions, currentQuestionIndex, score, quizCompleted } = useAppSelector((state) => state.quiz);

  const handleLogin = () => {
    dispatch(loginUser({ email: 'test@example.com', password: 'password' }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleFetchQuestions = () => {
    dispatch(fetchQuestions());
  };

  const handleNextQuestion = () => {
    dispatch(nextQuestion());
  };

  const handleSubmitAnswer = (answer: string) => {
    dispatch(submitAnswer(answer));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redux Example Component</Text>
      
      {/* Auth Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Authentication</Text>
        {user ? (
          <View>
            <Text>Logged in as: {user.email}</Text>
            <TouchableOpacity style={styles.button} onPress={handleLogout}>
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>
              {isLoading ? 'Logging in...' : 'Login'}
            </Text>
          </TouchableOpacity>
        )}
        {error && <Text style={styles.error}>{error}</Text>}
      </View>

      {/* Quiz Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quiz</Text>
        <TouchableOpacity style={styles.button} onPress={handleFetchQuestions}>
          <Text style={styles.buttonText}>Fetch Questions</Text>
        </TouchableOpacity>
        
        {questions.length > 0 && (
          <View>
            <Text>Question {currentQuestionIndex + 1} of {questions.length}</Text>
            <Text>Score: {score}</Text>
            <Text>{questions[currentQuestionIndex]?.question}</Text>
            
            {questions[currentQuestionIndex]?.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.optionButton}
                onPress={() => handleSubmitAnswer(option)}
              >
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
            
            <TouchableOpacity style={styles.button} onPress={handleNextQuestion}>
              <Text style={styles.buttonText}>Next Question</Text>
            </TouchableOpacity>
          </View>
        )}
        
        {quizCompleted && (
          <Text style={styles.completed}>Quiz completed! Final score: {score}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  optionButton: {
    backgroundColor: '#E8E8E8',
    padding: 10,
    borderRadius: 5,
    marginVertical: 2,
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
  completed: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default ExampleReduxComponent; 