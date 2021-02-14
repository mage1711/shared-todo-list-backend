import mongoose from "mongoose";
import User from "../models/User";
import List from "../models/List";
const url =
  "mongodb+srv://admin:90ZVui6wnRLIL2e9@cluster1.kocpj.mongodb.net/SharedTodo?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
// const user = new User({
//   name: "test",
//   email: "testdsad",
// });
// user.save(function (error, document) {
//   if (error) console.error(error);
//   console.log(document);
// });
// const list = new List({
//   name: "test",
//   todo: {
//     name: "test todo",
//   },
// });
// list.save(function (error, document) {
//   if (error) console.error(error);
//   console.log(document);
// });
export const saveToDatabase = (model) => {
  model.save(function (error, document) {
    if (error) console.error(error);
    console.log(document);
  });
};
export const getAllDocuments = async (model) => {
  var results = await model.find({}, function (err, documents) {
    var documentMap = {};
    documents.forEach(function (document) {
      documentMap[document._id] = document;
    });
    return documentMap;
  });
  return results;
};
async function test() {
  var rs = await getAllDocuments(List);
  console.log(rs);
}
test();
