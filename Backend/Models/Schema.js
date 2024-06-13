const mongoose = require('mongoose');

// Login Schema
const PlanktonSchema = new mongoose.Schema({
  
    "organism": "string",
    "taxonomy": {
      "kingdom": "string",
      "phylum": "string",
      "class": "string",
      "order": "string",
      "family": "string",
      "genus": "string",
      "species": "string"
    },
    "description": "string",
    "habitat": "string",
    "life_cycle": "string",
    "ecological_role": "string",
    "image_url": "string",
    "size": "string",
    "distribution": "string"
  
});
const NektonSchema = new mongoose.Schema({
  
  "organism": "string",
  "taxonomy": {
    "kingdom": "string",
    "phylum": "string",
    "class": "string",
    "order": "string",
    "family": "string",
    "genus": "string",
    "species": "string"
  },
  "description": "string",
  "habitat": "string",
  "life_cycle": "string",
  "ecological_role": "string",
  "image_url": "string",
  "size": "string",
  "distribution": "string"

});
const BenthosSchema = new mongoose.Schema({
  
  "organism": "string",
  "taxonomy": {
    "kingdom": "string",
    "phylum": "string",
    "class": "string",
    "order": "string",
    "family": "string",
    "genus": "string",
    "species": "string"
  },
  "description": "string",
  "habitat": "string",
  "life_cycle": "string",
  "ecological_role": "string",
  "image_url": "string",
  "size": "string",
  "distribution": "string"

});
const VertebratesSchema = new mongoose.Schema({
  
  "organism": "string",
  "taxonomy": {
    "kingdom": "string",
    "phylum": "string",
    "class": "string",
    "order": "string",
    "family": "string",
    "genus": "string",
    "species": "string"
  },
  "description": "string",
  "habitat": "string",
  "life_cycle": "string",
  "ecological_role": "string",
  "image_url": "string",
  "size": "string",
  "distribution": "string"

});
const InVertebratesSchema = new mongoose.Schema({
  
  "organism": "string",
  "taxonomy": {
    "kingdom": "string",
    "phylum": "string",
    "class": "string",
    "order": "string",
    "family": "string",
    "genus": "string",
    "species": "string"
  },
  "description": "string",
  "habitat": "string",
  "life_cycle": "string",
  "ecological_role": "string",
  "image_url": "string",
  "size": "string",
  "distribution": "string"

});
const MarinePlantsSchema = new mongoose.Schema({
  
  "organism": "string",
  "taxonomy": {
    "kingdom": "string",
    "phylum": "string",
    "class": "string",
    "order": "string",
    "family": "string",
    "genus": "string",
    "species": "string"
  },
  "description": "string",
  "habitat": "string",
  "life_cycle": "string",
  "ecological_role": "string",
  "image_url": "string",
  "size": "string",
  "distribution": "string"

});
const DeepseaOrganismsSchema = new mongoose.Schema({
  
  "organism": "string",
  "taxonomy": {
    "kingdom": "string",
    "phylum": "string",
    "class": "string",
    "order": "string",
    "family": "string",
    "genus": "string",
    "species": "string"
  },
  "description": "string",
  "habitat": "string",
  "life_cycle": "string",
  "ecological_role": "string",
  "image_url": "string",
  "size": "string",
  "distribution": "string"

});
const CoralsSchema = new mongoose.Schema({
  
  "organism": "string",
  "taxonomy": {
    "kingdom": "string",
    "phylum": "string",
    "class": "string",
    "order": "string",
    "family": "string",
    "genus": "string",
    "species": "string"
  },
  "description": "string",
  "habitat": "string",
  "life_cycle": "string",
  "ecological_role": "string",
  "image_url": "string",
  "size": "string",
  "distribution": "string"

});
const oceanConservationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true }
});
const ResourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['Marine Life', 'Conservation', 'Pollution'],
    required: true,
  },
  type: {
    type: String,
    enum: ['video', 'article', 'quiz'],
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
});

const eventSchema = new mongoose.Schema({
  event_name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  start_date: {
    type: Date,
    required: true
  },
  end_date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  }
});
const EducationModel=mongoose.model("Education",ResourceSchema);
const PlanktonModel = mongoose.model("planktontables", PlanktonSchema);
const NektonModel = mongoose.model("necktontables",NektonSchema);
const BenthosModel = mongoose.model("benthostables",BenthosSchema);
const VertebratesModel = mongoose.model("vertebratestables",VertebratesSchema);
const InVertebratesModel = mongoose.model("invertebratestables",InVertebratesSchema);
const MarinePlantsModel  = mongoose.model("marineplantstables",MarinePlantsSchema);
const DeepseaModel = mongoose.model("deepseatables",DeepseaOrganismsSchema);
const CoralsModel = mongoose.model("coraltables",CoralsSchema);
const OceanConservation = mongoose.model('OceanConservation', oceanConservationSchema);
const Event = mongoose.model('Event', eventSchema);
module.exports = { PlanktonModel,NektonModel,BenthosModel,VertebratesModel,InVertebratesModel,MarinePlantsModel,DeepseaModel,CoralsModel,OceanConservation,EducationModel,Event };
