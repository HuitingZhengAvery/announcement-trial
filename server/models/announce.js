const mongoose = require('mongoose');

const { Item } = mongoose;

const AnnouncementItem = new Item({
  title: String,
  body: String,
  author: String,        //how to get the props from 'this.username' so that you don't need to fill in 'author'
}, { timestamps: true });

AnnouncementItem.methods.toJSON = function() {  
  return {
    id: this.id,
    title: this.title,
    body: this.body,
    author: this.author,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

mongoose.model('Announcement', AnnouncementItem);