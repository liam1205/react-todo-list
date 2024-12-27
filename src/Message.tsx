function Message() {
  // JSX = JavaScript XML
  const name = 'Liam';
  if (name) {
    return <h1>Hello World! This is {name}'s website.</h1>;
  } else {
    return <h1>Hello World!</h1>;
  }
}

export default Message;
