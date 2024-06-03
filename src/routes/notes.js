const express = require('express');
const notesController = require('../controllers/notes')
const router = express.Router();

// CREATE - POST
router.post("/", notesController.createNewNotes);

// READ - GET
router.get("/", notesController.getAllNotes);
router.get("/:id", notesController.getNotesById);

// UPDATE - PATCH
router.patch("/:id", notesController.updateNoteById);

// DELETE - DELETE
router.delete("/:id", notesController.deleteNotesById);

module.exports = router;