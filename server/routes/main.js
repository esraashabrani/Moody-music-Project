const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// require songs model
const songs = require("../models/songs");

router.get("/sad", function (req, res) {
  songs.Song.find({ category: "sad" }, (err, songs) => {
    if (err) {
      console.log(err);
    }
    console.log(songs);
    return res.json(songs);
  }).limit(3);
  console.log("hello");
  // res.json("hello")
});

router.get("/happy", function (req, res) {
  songs.Song.find({ category: "happy" }, (err, songs) => {
    if (err) {
      console.log(err);
    }
    console.log(songs);
    return res.json(songs);
  }).limit(3);
  console.log("hello");
  // res.json("hello")
});

router.get("/romantic", function (req, res) {
  songs.Song.find({ category: "romantic" }, (err, songs) => {
    if (err) {
      console.log(err);
    }
    console.log(songs);
    return res.json(songs);
  }).limit(3);
  console.log("hello");
  // res.json("hello")
});

router.get("/tarab", function (req, res) {
  songs.Song.find({ category: "tarab" }, (err, songs) => {
    if (err) {
      console.log(err);
    }
    console.log(songs);
    return res.json(songs);
  }).limit(3);
  console.log("hello");
  // res.json("hello")
});

router.get("/sarcastic", function (req, res) {
  songs.Song.find({ category: "sarcastic" }, (err, songs) => {
    if (err) {
      console.log(err);
    }
    console.log(songs);
    return res.json(songs);
  }).limit(3);
  console.log("hello");
  // res.json("hello")
});

router.get("/workout", function (req, res) {
  songs.Song.find({ category: "workout" }, (err, songs) => {
    if (err) {
      console.log(err);
    }
    console.log(songs);
    return res.json(songs);
  }).limit(3);
  console.log("hello");
  // res.json("hello")
});
module.exports = router;
