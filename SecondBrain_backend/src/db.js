const mongoose = require("mongoose");
const ObjectId = mongoose.ObjectId;
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    username : {type: String, required: true, unique: true},
    password : {type: String,required: true}
})

const contentTypes = ['image', 'video', 'article', 'audio']; // Extend as needed

const contentSchema = new Schema({
  link: { type: String, required: true },
  type: { type: String, enum: contentTypes },
  title: { type: String, required: true },
  tags: [{ type: ObjectId, ref: 'Tag' }],
  userId: { type:ObjectId, ref: 'Users', required: true },
});

const TagSchema = new Schema({
title: {type:String,required: true, unique: true}
})

const LinkSchema = new mongoose.Schema({
  hash: { type: String, required: true },
  userId: { type: ObjectId, ref: 'Users' },
});

const Tag = mongoose.model("Tag",TagSchema);
const Content = mongoose.model("Content",contentSchema);
const User = mongoose.model('Users',UserSchema);
const Link = mongoose.model("Link",LinkSchema);

module.exports = {
    User,
    Content,
    Tag,
    Link 
  }