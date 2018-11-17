const message = 'some message';
const name = 'some name';

const location = 'Malaysia';

const getGreeting = name => {
  return `Welcome to the course ${name}`;
};

export { message, name, getGreeting, location as default };
//location is default export, default can be only one
