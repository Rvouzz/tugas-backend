const notesModel = require("../models/notes");

const getAllNotes = async (req, res) => {
  try {
    const [notes] = await notesModel.getAllNotes();
    res.status(200).json({ message: "GET all notes success", notes });
  } catch (error) {
    console.error("Error retrieving all notes:", error);
    res.status(500).json({ error: "Failed to retrieve notes" });
  }
};

const getNotesById = async (req, res) => {
  const { id } = req.params;
  try {
    const [note] = await notesModel.getNotesById(id);
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.status(200).json(note);
  } catch (error) {
    console.error(`Error retrieving note with id ${id}:`, error);
    res.status(500).json({ error: "Failed to retrieve note" });
  }
};

const createNewNotes = async (req, res) => {
  const { title, datetime, note } = req.body;

  if (!title || !note) {
    return res.status(400).json({ error: "Bad Request: Missing required fields" });
  }

  try {
    const result = await notesModel.createNewNotes(title, datetime, note);
    
    if (result.error) {
      return res.status(400).json({ error: result.error });
    }

    res.status(201).json({ message: "Note created successfully", title, datetime, note });
  } catch (error) {
    console.error("Error creating new note:", error);
    res.status(500).json({ error: "Server Error" });
  }
};

const updateNoteById = async (req, res) => {
  const { id } = req.params;
  const { title, datetime, note } = req.body;
  try {
    const updateResult = await notesModel.updateNoteById(
      id,
      title,
      datetime,
      note
    );

    if (updateResult.affectedRows > 0) {
      res.status(200).json({
        message: "Note updated successfully",
        id,
        title,
        datetime,
        note,
      });
    } else {
      res.status(404).json({ message: "Note not found", id });
    }
  } catch (error) {
    console.error(`Error updating note with id ${id}:`, error);
    res.status(500).json({ error: "Failed to update note" });
  }
};

const deleteNotesById = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteResult = await notesModel.deleteNotesById(id);

    if (deleteResult.affectedRows > 0) {
      res.status(200).json({ message: "Note deleted successfully", id });
    } else {
      res.status(404).json({ message: "Note not found", id });
    }
  } catch (error) {
    console.error(`Error deleting note with id ${id}:`, error);
    res.status(500).json({ error: "Failed to delete note" });
  }
};

module.exports = {
  getAllNotes,
  getNotesById,
  createNewNotes,
  updateNoteById,
  deleteNotesById,
};
