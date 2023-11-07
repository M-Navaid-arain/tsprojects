import inquirer from 'inquirer';

interface TodoItem {
  text: string;
  completed: boolean;
}

class TodoList {
  private items: TodoItem[] = [];

  addItem(text: string): void {
    this.items.push({ text, completed: false });
  }

  listItems(): TodoItem[] {
    return this.items;
  }

  completeItem(index: number): void {
    if (index >= 0 && index < this.items.length) {
      this.items[index].completed = true;
    }
  }
}

async function main() {
  const todoList = new TodoList();

  while (true) {
    const action = await inquirer.prompt({
      type: 'list',
      name: 'choice',
      message: 'Select an action:',
      choices: ['Add TODO', 'List TODOs', 'Complete TODO', 'Exit'],
    });

    if (action.choice === 'Add TODO') {
      const todo = await inquirer.prompt({
        type: 'input',
        name: 'text',
        message: 'Enter the TODO item:',
      });
      todoList.addItem(todo.text);
    } else if (action.choice === 'List TODOs') {
      const items = todoList.listItems();
      console.log('TODO List:');
      items.forEach((item, index) => {
        console.log(`${index + 1}. [${item.completed ? 'x' : ' '}] ${item.text}`);
      });
    } else if (action.choice === 'Complete TODO') {
      const items = todoList.listItems();
      const todo = await inquirer.prompt({
        type: 'number',
        name: 'index',
        message: 'Enter the index of the TODO item to complete:',
      });
      todoList.completeItem(todo.index - 1);
    } else if (action.choice === 'Exit') {
      console.log('Exiting the TODO app.');
      break;
    }
  }
}

main();
