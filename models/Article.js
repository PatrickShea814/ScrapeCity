var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var articleschema = new Schema({
    // `title` is required and of type String
    title: {
        type: String,
        trim: true
    },
    // `link` is required and of type String
    link: {
        type: String,
        trim: true
    },
    notes: {
        type: String,
        trim: true
    },
    favorited: {
        type: Boolean,
        default: false
    },
    // `note` is an object that stores a Note id
    // The ref property links the ObjectId to the Note model
    // This allows us to populate the Article with an associated Note
    note: [{
        type: Schema.Types.ObjectId,
        ref: "Note"
    }]
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", articleschema);

// Export the Article model
module.exports = Article;
