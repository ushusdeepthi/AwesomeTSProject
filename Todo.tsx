import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function Todo() {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');
  const [edit, setEdit] = useState<boolean>(false);
  const handleSubmit = () => {
    input && setTodoList([...todoList, input]);
    setInput('');
    setEdit(false);
  };
  const removeTodo = (index: number) => {
    setTodoList(todoList.filter((item, index_value) => index_value !== index));
  };
  const editTodo = (index: number) => {
    setEdit(true);
  };
  const todoObject = {}
  return (
    <View>
      {!edit ? (
        <View>
          {todoList &&
            todoList.map((item, index) => {
              return (
                <View key={index}>
                  <Text>{item}</Text>
                  {/* <TouchableOpacity
                    style={styles.button}
                    onPress={() => editTodo(index)}>
                    <Text style={{marginRight: 'auto', marginLeft: 'auto'}}>
                      Edit
                    </Text>
                  </TouchableOpacity> */}
                  <Button title="Edit" onPress={() => editTodo(index)} />
                  <Button
                    color="tomato"
                    title="Delete"
                    onPress={() => removeTodo(index)}
                  />
                </View>
              );
            })}
          <TextInput
            onChangeText={text => setInput(text)}
            // name = "item"

            placeholder="Here goes the todo"
            value={input}
          />
          <Button title="Add Task" onPress={handleSubmit} />
        </View>
      ) : (
        <View>
          <Text style={styles.edit}>Edit</Text>
          <TextInput
            onChangeText={text => setInput(text)}
            placeholder="Here goes the todo"
          />
          <Button title="Edit Task" onPress={handleSubmit} />
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
  },
  edit: {
    fontSize: 30,
  },
});
