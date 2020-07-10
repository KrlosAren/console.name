const messages = [
  'Carlos',
  'Ana',
  'Nicolas',
  'Jessica',
  'Diego',
  'Camila',
  'Julia',
  'Carolina',
  'Paulina'
];

const randomMesg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message)
};

module.exports = { randomMesg };



