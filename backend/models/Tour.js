const mongoose = require("mongoose");

const TourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide tour name"],
  },
  categories: {
    type: [String],
    enum: [
      "food",
      "nightlife",
      "history",
      "art",
      "movies",
      "museums",
      "amenities",
      "music",
      "dayTrip",
      "culture",
      "science",
      "parks",
      "show",
      "sport",
      "events",
      "circus",
      "seminars",
      "river",
      "shopping",
      "workshop",
      "hiking",
      "camping",
      "technology",
      "outdoor",
      "coffeeShop",
      "bikingRoutes",
      "petFriendlyPlaces",
      "vegeterian",
    ],
    location: {
      lat: {
        type: Number,
        required: [true, "Please the location of your tour"],
      },
      lng: {
        type: Number,
        required: [true, "Please provide the location of your tour"],
      },
    },
    duration: {
      type: Number,
      required: [true, "Please provide duration of the tour"],
    },
    Date: {
      type: Date,
      required: [true, "Please provide the date of the event"],
    },
    price: {
      type: Mongoose.Schema.Mixed,
      enum: ["Free"],
      required: [true, "Provide price of event or asign as FREE"],
    },
    ratings: {
      type: [Number],
    },

    reviews: {
      type: [
        {
          review: {
            type: String,
          },
          images: {
            type: [String],
          },
          approved: {
            type: Boolean,
            default: false,
          },
        },
      ],
    },
  },
});

const Tour = mongoose.Model("Tour", TourSchema);

module.exports = Tour;