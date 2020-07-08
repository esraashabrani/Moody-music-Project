const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
var unirest = require("unirest");
// require songs model
const songs = require("../models/songs");

// router.get("/sad", function (req, res) {
//   songs.Song.find({ category: "sad" }, (err, songs) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(songs);
//     return res.json(songs);
//   }).limit(6);
//   console.log("hello");
//   // res.json("hello")
// });
function getSadSongs() {
  return new Promise((resolve, reject) => {
    unirest
      .get("https://deezerdevs-deezer.p.rapidapi.com/search")
      .query({
        q: "sad",
      })
      .headers({
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "7bef9b4a46msh2986caafe6b18edp1faee5jsna28cfcfe8b23",
        useQueryString: true,
      })
      .end(function (response) {
        if (response.error) {
          return reject(error);
        }
        return resolve(response.body);
      });
  });
}
router.get("/sad", function (req, res) {
  getSadSongs().then((body) => res.json(body.data)).catch((error) => 
  console.log("error", error))
});

function getHappySongs() {
  return new Promise((resolve, reject) => {
    unirest
      .get("https://deezerdevs-deezer.p.rapidapi.com/search")
      .query({
        q: "happy",
      })
      .headers({
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "7bef9b4a46msh2986caafe6b18edp1faee5jsna28cfcfe8b23",
        useQueryString: true,
      })
      .end(function (response) {
        if (response.error) {
          return reject(error);
        }
        return resolve(response.body);
      });
  });
}
router.get("/happy", function (req, res) {
  getHappySongs().then((body) => res.json(body.data)).catch((error) => 
  console.log("error", error))
});

// router.get("/happy", function (req, res) {
//   songs.Song.find({ category: "happy" }, (err, songs) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(songs);
//     return res.json(songs);
//   }).limit(6);
//   console.log("hello");
//   // res.json("hello")
// });

function getRomanticSongs() {
  return new Promise((resolve, reject) => {
    unirest
      .get("https://deezerdevs-deezer.p.rapidapi.com/search")
      .query({
        q: "romantic",
      })
      .headers({
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "7bef9b4a46msh2986caafe6b18edp1faee5jsna28cfcfe8b23",
        useQueryString: true,
      })
      .end(function (response) {
        if (response.error) {
          return reject(error);
        }
        return resolve(response.body);
      });
  });
}
router.get("/romantic", function (req, res) {
  getRomanticSongs().then((body) => res.json(body.data)).catch((error) => 
  console.log("error", error))
});
// router.get("/romantic", function (req, res) {
//   songs.Song.find({ category: "romantic" }, (err, songs) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(songs);
//     return res.json(songs);
//   }).limit(6);
//   console.log("hello");
//   // res.json("hello")
// });

function getTarabSongs() {
  return new Promise((resolve, reject) => {
    unirest
      .get("https://deezerdevs-deezer.p.rapidapi.com/search")
      .query({
        q: "tarab",
      })
      .headers({
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "7bef9b4a46msh2986caafe6b18edp1faee5jsna28cfcfe8b23",
        useQueryString: true,
      })
      .end(function (response) {
        if (response.error) {
          return reject(error);
        }
        return resolve(response.body);
      });
  });
}
router.get("/tarab", function (req, res) {
  getTarabSongs().then((body) => res.json(body.data)).catch((error) => 
  console.log("error", error))
});

// router.get("/tarab", function (req, res) {
//   songs.Song.find({ category: "tarab" }, (err, songs) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(songs);
//     return res.json(songs);
//   }).limit(6);
//   console.log("hello");
//   // res.json("hello")
// });

function getSarcasticSongs() {
  return new Promise((resolve, reject) => {
    unirest
      .get("https://deezerdevs-deezer.p.rapidapi.com/search")
      .query({
        q: "sarcastic",
      })
      .headers({
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "7bef9b4a46msh2986caafe6b18edp1faee5jsna28cfcfe8b23",
        useQueryString: true,
      })
      .end(function (response) {
        if (response.error) {
          return reject(error);
        }
        return resolve(response.body);
      });
  });
}
router.get("/sarcastic", function (req, res) {
  getSarcasticSongs().then((body) => res.json(body.data)).catch((error) => 
  console.log("error", error))
});
// router.get("/sarcastic", function (req, res) {
//   songs.Song.find({ category: "sarcastic" }, (err, songs) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(songs);
//     return res.json(songs);
//   }).limit(6);
//   console.log("hello");
//   // res.json("hello")
// });

function getWorkoutSongs() {
  return new Promise((resolve, reject) => {
    unirest
      .get("https://deezerdevs-deezer.p.rapidapi.com/search")
      .query({
        q: "workout",
      })
      .headers({
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "7bef9b4a46msh2986caafe6b18edp1faee5jsna28cfcfe8b23",
        useQueryString: true,
      })
      .end(function (response) {
        if (response.error) {
          return reject(error);
        }
        return resolve(response.body);
      });
  });
}
router.get("/workout", function (req, res) {
  getWorkoutSongs().then((body) => res.json(body.data)).catch((error) => 
  console.log("error", error))
});

// router.get("/workout", function (req, res) {
//   songs.Song.find({ category: "workout" }, (err, songs) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(songs);
//     return res.json(songs);
//   }).limit(6);
//   console.log("hello");
//   // res.json("hello")
// });
module.exports = router;
