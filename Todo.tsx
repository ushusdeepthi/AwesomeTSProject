import React, {useState} from 'react';
import {Text, View, TextInput, Button} from 'react-native';

export default function Todo() {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');
  const handleSubmit = () => {
    input && setTodoList([...todoList, input]);
    setInput('');
  };
  const removeTodo = (index: number) => {
    setTodoList(todoList.filter((item, index_value) => index_value !== index));
  };
  return (
    <View>
      {todoList &&
        todoList.map((item, index) => {
          return (
            <View
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
              }}
              key={index}>
              <Text>{item}</Text>
              <Button title="X" onPress={() => removeTodo(index)} />
            </View>
          );
        })}
      <TextInput
        onChangeText={text => setInput(text)}
        // name = "item"
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        placeholder="Here goes the todo"
        value={input}
      />
      <Button title="Add Task" onPress={handleSubmit} />
    </View>
  );
}
