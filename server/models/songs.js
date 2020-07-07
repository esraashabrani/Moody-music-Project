const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const songsData = require("./songsData.json");

// Create Schema
//sad , happy , romantic , tarab , sarcastic,  workout
const songSchema = new Schema({
  song: String,
  singer: String,
  url: String,
  category: String,
});

let saveSt = () => {
  for (var i = 0; i < songsData.length; i++) {
    var song = new Song({
      song: songsData[i].song,
      singer: songsData[i].singer,
      url: songsData[i].url,
      category: songsData[i].category,
    });
    song.save();
  }
};
const Song = mongoose.model("Song", songSchema);

module.exports.Song = Song;
module.exports.saveSt = saveSt;
