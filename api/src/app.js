import express from 'express';

const delay = 2500;
const app = express();

const reverse = s => {
  const out = s
    .split('')
    .reverse()
    .join('');
  return new Promise(resolve => {
    setTimeout(() => resolve(out), delay);
  });
};

app.get('/api/reverse/:something', async (req, res) => {
  const something = req.params.something;
  console.log(`Reversing "${something}"`);
  const reversed = await reverse(something);
  res.json(reversed);
});

export default app;
