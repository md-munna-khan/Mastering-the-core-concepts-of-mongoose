import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";

const app: Application = express();
app.use(express.json())

const noteSchema = new Schema({
  title: { type: String, required: true, trim: true },
  content: { type: String, default: "" },
  category: {
    type: String,
    enum: ["personal", "work", "study", "Other"],
    default: "personal",
  },
  pinned: {
    type: Boolean,
    default: false,
  },
  tags: {
    label: { type: String, required: true },
    color: { type: String, default: "gray" },
  },
});
const Note = model("Note", noteSchema);

app.post("/notes/create-note", async (req: Request, res: Response) => {
const body =req.body
    // approach -1 creating a database
//   const myNote = new Note({
//     title: "Learning Express",
//     tags: {
//       label: "database",
//     },
//   });
//   await myNote.save();


//approach-2
const note = await Note.create(body)
  res.status(201).json({
    success: true,
    message: "Note created Successfully",
    note
  });
});

// all notes get
app.get("/notes", async (req: Request, res: Response) => {

const notes = await Note.find()
  res.status(201).json({
    success: true,
    message: "Note created Successfully",
    notes
  });
});
// single note get
app.get("/notes/:noteId", async (req: Request, res: Response) => {
const noteId=req.params.noteId
// const note = await Note.findById(noteId)
const note = await Note.findOne({_id:noteId})
  res.status(201).json({
    success: true,
    message: "Note created Successfully",
    note
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Note App");
});
export default app;
