const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 8000;

app.get('/', async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf',
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('서버에 오류가 발생했습니다 새로고침을 시도해주세요!');
    res.status(404).send('서버에 오류가 발생했습니다 새로고침을 시도해주세요!')
  }

  const wordValue = "exampleWord"; 
  const meanValue = "exampleMeaning"; 
  res.render('wordpad', { wordValue, meanValue });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
