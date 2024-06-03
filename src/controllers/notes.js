const notesModel = require('../models/notes')

const getAllNotes = async (req, res) => {
  try {
    const [notes] = await notesModel.getAllNotes();
    res.status(200).json(notes);
  } catch (error) {
    console.error('Error retrieving all notes:', error);
    res.status(500).json({ error: 'Failed to retrieve notes' });
  }
};

const getNotesById = async (req, res) => {
  const { id } = req.params;
  try {
    const [note] = await notesModel.getNotesById(id);
    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }
    res.status(200).json(note);
  } catch (error) {
    console.error(`Error retrieving note with id ${id}:`, error);
    res.status(500).json({ error: 'Failed to retrieve note' });
  }
};

const createNewNotes = async (req, res) => {
  const { title, datetime, note } = req.body;
  
  if (!title || !note) {
    return res.status(400).send('Bad Request: Missing required fields');
  }

  try {
    const result = await notesModel.createNewNotes(title, datetime, note);
    res.status(201).json({ message: 'Note created successfully', title, datetime, note});
  } catch (error) {
    console.error('Error creating new note:', error);
    res.status(500).send('Server Error');
  }
};

const updateNoteById = async (req, res) => {
  const { id } = req.params;
  const { title, datetime, note } = req.body;
  try {
    await notesModel.updateNoteById(id, title, datetime, note);
    res.status(200).json({ message: 'Note updated successfully', id, title, datetime, note });
  } catch (error) {
    console.error(`Error updating note with id ${id}:`, error);
    res.status(500).json({ error: 'Failed to update note' });
  }
};

const deleteNotesById = async (req, res) => {
  const { id } = req.params;
  try {
    await notesModel.deleteNotesById(id);
    res.status(200).json({ message: 'Note deleted successfully', id });
  } catch (error) {
    console.error(`Error deleting note with id ${id}:`, error);
    res.status(500).json({ error: 'Failed to delete note' });
  }
};

module.exports = {
  getAllNotes,
  getNotesById,
  createNewNotes,
  updateNoteById,
  deleteNotesById
};
