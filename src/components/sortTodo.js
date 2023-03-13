export default function sortTodo(todos, sortMetod) {
  const sortNameHandler = () => {
    const sorted = [
      ...todos.sort((a, b) => {
        if (a.text > b.text) return 1;
        if (a.text < b.text) return -1;
        return 0;
      }),
    ];
    return sorted;
  };

  const sortAutoHandler = () => {
    const sorted = [...todos.sort((a, b) => a.num - b.num)];
    return sorted;
  };

  const sortComleteHandler = () => {
    const sorted = [
      ...todos.sort((a, b) => {
        if (a.isCompleted === b.isCompleted) return 0;
        if (a.isCompleted) return 1;
        if (b.isCompleted) return -1;
      }),
    ];
    return sorted;
  };

  const reversTodo = () => {
    const sorted = [...todos.reverse()];
    return sorted;
  };

  if (sortMetod === "auto") {
    return sortAutoHandler();
  } else if (sortMetod === "name") {
    return sortNameHandler();
  } else if (sortMetod === "complete") {
    return sortComleteHandler();
  } else if (sortMetod === "revers") {
    return reversTodo();
  }
}
