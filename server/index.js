const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

app.use(express.json());

// Azure Endpoint for Prediction
const azurePredictionEndpoint = 'https://azure-lab-czxwg.eastus2.inference.ml.azure.com/score';
const apiKey = "bbUGDU82ruXa8wJSIKtrPtQFWPiE5ATv";

const openaiApiKey = 'YOUR_OPENAI_API_KEY';
const openaiEndpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';

app.get('/get-data', (req, res) => {

  // const { PO3, PO4, F6, C4, CP4 } = req.body;

  const brainwaveData = {
    PO3: req.body.PO3,
    PO4: req.body.PO4,
    F6: req.body.F6,
    C4: req.body.C4,
    CP4: req.body.CP4,
  };

  const userDetails = {
    name: req.body.name,
    age: req.body.age,
    profession: req.body.profession,
    weakness: req.body.weakness,
    strength: req.body.strength,
  };

});
app.post('/predict', async (req, res) => {
  try {
    // Prepare the data for prediction
    const inputData = {
      columns: [
        "Column2",
        "unixTimestamp",
        "CP3",
        "C3",
        "F5",
        "PO3",
        "PO4",
        "F6",
        "C4",
        "CP4"
      ],
      index: [],
      data: [
        1,
        1674926223360,
        -3831.309919,
        -463.1668664,
        796.4329514,
        brainwaveData.PO3,
        brainwaveData.PO4,
        brainwaveData.F6,
        brainwaveData.C4,
        brainwaveData.CP4
      ]
    };

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'azureml-model-deployment': 'ai-addiction-1'
    };

    // Send POST request to Azure ML scoring endpoint
    const azureMlResponse = await axios.post(azurePredictionEndpoint, inputData, {
      headers: headers
    });

    const result = azureMlResponse.data || 'yes';

    // Send the result back to the frontend
    res.json({ result });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.post('/generate', async (req, res) => {
  const prompt = `Consider you are an addiction controller who knows the details of the user. He is ${userDetails.name}, ${userDetails.age} years old and works as a ${userDetails.profession}. He has a weakness for ${userDetails.weakness} and a strength for ${userDetails.strength}. He has been using the app for a while now and his brainwave data is as follows: PO3: ${brainwaveData.PO3}, PO4: ${brainwaveData.PO4}, F6: ${brainwaveData.F6}, C4: ${brainwaveData.C4}, CP4: ${brainwaveData.CP4}. And the result of the prediction is yes. So, plese use his personal details to help him get rid of his addiction. Thank you!`;

  const openaiResponse = await axios.post(
    openaiEndpoint,
    {
      prompt,
      max_tokens: 200,
    },
    {
      headers: {
        Authorization: `Bearer ${openaiApiKey}`,
      },
    }
  );

  const output = openaiResponse.data.choices[0].text;

  res.json({ output });
});
 

  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
