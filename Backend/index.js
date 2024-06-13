const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');
const { PlanktonModel,NektonModel,BenthosModel, CoralsModel, InVertebratesModel, VertebratesModel, DeepseaModel,MarinePlantsModel ,OceanConservation,EducationModel,Event} = require('./Models/Schema');

const app = express();
app.use(express.json());
app.use(cors());

async function connectdb() {
  try {
    await mongoose.connect("mongodb+srv://SwethaAmaravathi:Swetha9865@blossom.ho7wing.mongodb.net/TideTales?retryWrites=true&w=majority&appName=Blossom");
    console.log("db connection success");

    const x = 4000;
    app.listen(x, function () {
      console.log(`starting port ${x}...`);
    });
  } catch (err) {
    console.log("db not connected: " + err);
  }
}
connectdb();

// Add user
app.post('/addplankton', async (req, res) => {
  try {
      const {
          organism,
          taxonomy,
          description,
          habitat,
          life_cycle,
          ecological_role,
          image_url,
          size,
          distribution
      } = req.body;

      const newPlankton = new PlanktonModel({
          organism,
          taxonomy,
          description,
          habitat,
          life_cycle,
          ecological_role,
          image_url,
          size,
          distribution
      });

      await newPlankton.save();
      res.status(201).json({ message: "Plankton added successfully", plankton: newPlankton });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});
app.post('/addnekton', async (req, res) => {
  try {
      const {
          organism,
          taxonomy,
          description,
          habitat,
          life_cycle,
          ecological_role,
          image_url,
          size,
          distribution
      } = req.body;

      const newnekton= new NektonModel({
          organism,
          taxonomy,
          description,
          habitat,
          life_cycle,
          ecological_role,
          image_url,
          size,
          distribution
      });

      await newnekton.save();
      res.status(201).json({ message: "nekton added successfully"});
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});
app.post('/addbenthos', async (req, res) => {
  try {
      const {
          organism,
          taxonomy,
          description,
          habitat,
          life_cycle,
          ecological_role,
          image_url,
          size,
          distribution
      } = req.body;

      const newbenthos= new BenthosModel({
          organism,
          taxonomy,
          description,
          habitat,
          life_cycle,
          ecological_role,
          image_url,
          size,
          distribution
      });

      await newbenthos.save();
      res.status(201).json({ message: "Benthos added successfully" });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});
app.post('/adddeepseaorganisms', async (req, res) => {
  try {
      const {
          organism,
          taxonomy,
          description,
          habitat,
          life_cycle,
          ecological_role,
          image_url,
          size,
          distribution
      } = req.body;

      const neworganisms= new DeepseaModel({
          organism,
          taxonomy,
          description,
          habitat,
          life_cycle,
          ecological_role,
          image_url,
          size,
          distribution
      });

      await neworganisms.save();
      res.status(201).json({ message: "Organisms added successfully" });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});
app.post('/addvertebrates', async (req, res) => {
  try {
      const {
          organism,
          taxonomy,
          description,
          habitat,
          life_cycle,
          ecological_role,
          image_url,
          size,
          distribution
      } = req.body;

      const newvertebrates= new VertebratesModel({
          organism,
          taxonomy,
          description,
          habitat,
          life_cycle,
          ecological_role,
          image_url,
          size,
          distribution
      });

      await newvertebrates.save();
      res.status(201).json({ message: "vertebrates added successfully" });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});
app.post('/addinvertevrates', async (req, res) => {
  try {
      const {
          organism,
          taxonomy,
          description,
          habitat,
          life_cycle,
          ecological_role,
          image_url,
          size,
          distribution
      } = req.body;

      const newinvertebrates= new InVertebratesModel({
          organism,
          taxonomy,
          description,
          habitat,
          life_cycle,
          ecological_role,
          image_url,
          size,
          distribution
      });

      await newinvertebrates.save();
      res.status(201).json({ message: "Invertebrates added successfully" });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});
app.post('/addcorals', async (req, res) => {
  try {
      const {
          organism,
          taxonomy,
          description,
          habitat,
          life_cycle,
          ecological_role,
          image_url,
          size,
          distribution
      } = req.body;

      const newcorals= new CoralsModel({
          organism,
          taxonomy,
          description,
          habitat,
          life_cycle,
          ecological_role,
          image_url,
          size,
          distribution
      });

      await newcorals.save();
      res.status(201).json({ message: "coral added successfully"});
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});
app.post('/addplants', async (req, res) => {
  try {
      const {
          organism,
          taxonomy,
          description,
          habitat,
          life_cycle,
          ecological_role,
          image_url,
          size,
          distribution
      } = req.body;

      const newplants= new MarinePlantsModel({
          organism,
          taxonomy,
          description,
          habitat,
          life_cycle,
          ecological_role,
          image_url,
          size,
          distribution
      });

      await newplants.save();
      res.status(201).json({ message: "Plants added successfully" });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});


// Get all planktons
app.get('/getallplanktons', async (req, res) => {
  try {
    const users = await PlanktonModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// get all nektons
app.get('/getallnektons', async (req, res) => {
  try {
    const users = await NektonModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get('/getallplants', async (req, res) => {
  try {
    const users = await MarinePlantsModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get('/getallorganisms', async (req, res) => {
  try {
    const users = await DeepseaModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get('/getallvertebrates', async (req, res) => {
  try {
    const users = await VertebratesModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get('/getallinvertebrates', async (req, res) => {
  try {
    const users = await InVertebratesModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get('/getallcorals', async (req, res) => {
  try {
    const users = await CoralsModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get('/getallbenthos', async (req, res) => {
  try {
    const users = await BenthosModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.post('/ocean-conservation', async (req, res) => {
  const { title, description, content } = req.body;

  // Validate the input
  if (!title || !description || !content) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Create a new Ocean Conservation topic
    const newTopic = new OceanConservation({
      title,
      description,
      content,
    });

    // Save the topic to the database
    const savedTopic = await newTopic.save();

    // Return the saved topic
    res.status(201).json(savedTopic);
  } catch (error) {
    res.status(500).json({ message: 'Error saving the topic', error });
  }
});
app.get('/getalltips', async (req, res) => {
  try {
    const users = await OceanConservation.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.post('/api/resources', async (req, res) => {
  try {
    const { title, description, content, category, type, thumbnail } = req.body;

    const newResource = new EducationModel({
      title,
      description,
      content,
      category,
      type,
      thumbnail,
    });

    const savedResource = await newResource.save();
    res.status(201).json(savedResource);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});
app.get('/getallresources', async (req, res) => {
  try {
    const resources = await EducationModel.find();
    res.json(resources);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/addevent', async (req, res) => {
  const { event_name, location, start_date, end_date, description, website } = req.body;

  if (!event_name || !location || !start_date || !end_date || !description || !website) {
    return res.status(400).send('All fields are required');
  }

  try {
    const newEvent = new Event({
      event_name,
      location,
      start_date,
      end_date,
      description,
      website
    });

    await newEvent.save();
    res.status(201).send('Event added successfully');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getallevents', async (req, res) => {
  try {
    const events= await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get('/news', async (req, res) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: 'marine conservation',
        apiKey: '49df291714f248bda73dd7ca7c560c97'  // Your actual API key
      }
    });
    res.json(response.data.articles);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching news', error: error.message });
  }
});
