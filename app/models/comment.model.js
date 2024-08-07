module.exports = mongoose => { // Exporting the module.
    var schema = mongoose.Schema( // Creating a schema.
    {
        title: String, // Title of the comment.
        description: String, // Description of the comment.
        published: Boolean //   Published status of the comment.
    },
    { timestamps: true } // Adding timestamps to the schema.
); 

schema.method("toJSON", function(){ // Adding a method to the schema.
    const {__v, _id, ...object} = this.toObject(); // Destructuring the object.
    object.id = _id; // Adding the id to the object.
    return object; // Returning the object.
});

const Comment = mongoose.model("comment", schema); // Exporting the model.
return Comment; // Returning the model.
};