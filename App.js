import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

const MainScreen = () => {
  const [apiKey, setApiKey] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('Integrals');
  const [generatedProblem, setGeneratedProblem] = useState('');
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);

  const containerRef = useRef(null);

  const generateProblem = async () => {
    try {
      let prompt;

      if (selectedTopic === 'Integrals') {
        prompt = 'Generate a random integral problem with complexity only up to u substitution. Give the problem in multiple choice format.';
      } else {
        prompt = `Create a very simple ${selectedTopic} problem to solve. If the topic is psychology, ask what the DSM-5 is and give it in multiple choice format.`;
      }

      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4',
          messages: [
            {
              role: 'user',
              content: prompt,
            },
          ],
          max_tokens: 150,
          n: 1,
          stop: null,
          temperature: 0.7,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );

      const problem = response.data.choices[0].message.content.trim();
      const lines = problem.split('\n');
      const question = lines[0].trim();
      const choices = lines.slice(1).map(line => line.trim());
      const correctAnswerIndex = choices.findIndex(choice => choice.includes('(Correct)'));
      const correctAnswer = String.fromCharCode(65 + correctAnswerIndex);
      setGeneratedProblem(question);
      setOptions(choices);
      setCorrectAnswer(correctAnswer);
      setSelectedAnswer('');
      setShowResult(false);

      setTimeout(() => {
        containerRef.current.scrollToEnd({ animated: true });
      }, 100);
    } catch (error) {
      console.error('Error generating problem:', error);
    }
  };

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
    setShowResult(true);
  };

  return (
    <ScrollView
      ref={containerRef}
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Welcome SOU Student!</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your OpenAI API Key"
        value={apiKey}
        onChangeText={setApiKey}
      />

      <Picker
        selectedValue={selectedTopic}
        onValueChange={(itemValue) => setSelectedTopic(itemValue)}
      >
        <Picker.Item label="Integrals" value="Integrals" />
        <Picker.Item label="Psychology" value="Psychology" />
        <Picker.Item label="Personal" value="Personal" />
      </Picker>

      <Button title="Generate Problem" onPress={generateProblem} />

      <ScrollView style={styles.problemContainer}>
        <Text style={styles.problemText}>{generatedProblem}</Text>
        <View style={styles.optionsContainer}>
          {options.map((option, index) => (
            <Button
              key={index}
              title={`${String.fromCharCode(65 + index)}. ${option}`}
              onPress={() => handleAnswerSelection(String.fromCharCode(65 + index))}
              disabled={showResult}
            />
          ))}
        </View>
        {showResult && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>
              {selectedAnswer === correctAnswer ? 'Correct!' : 'Incorrect!'}
            </Text>
          </View>
        )}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  problemContainer: {
    maxHeight: 300,
    marginTop: 20,
  },
  problemText: {
    fontSize: 16,
  },
  optionsContainer: {
    marginTop: 20,
  },
  resultContainer: {
    marginTop: 20,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MainScreen;