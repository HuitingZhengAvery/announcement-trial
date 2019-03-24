const mongoose = require('mongoose');

const { Schema } = mongoose;

const AnnouncementSchema = new Schema({
  title: String,
  body: String,
  author: String,       
}, { timestamps: true });

AnnouncementSchema.methods.toJSON = function() {  
  return {
    id: this.id,
    title: this.title,
    body: this.body,
    author: this.author,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

mongoose.model('Announcement', AnnouncementSchema);
