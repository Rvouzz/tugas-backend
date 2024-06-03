const { dbPool } = require('../core/config');

const getAllNotes = () => {
  const SQLQuery = "SELECT * FROM notes";
  return dbPool.execute(SQLQuery);
};

const getNotesById = (id) => {
  const SQLQuery = "SELECT * FROM notes WHERE id = ?";
  return dbPool.execute(SQLQuery, [id]);
};

const createNewNotes = (title, datetime, note) => {
  // Check if datetime is null or undefined
  const datetimeParam = datetime || null;

  const SQLQuery = "INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)";
  return dbPool.execute(SQLQuery, [title, datetimeParam, note]);
};

const updateNoteById = (id, title, datetime, note) => {
  const SQLQuery = "UPDATE notes SET title = ?, datetime = ?, note = ? WHERE id = ?";
  return dbPool.execute(SQLQuery, [title, datetime, note, id]);
};

const deleteNotesById = (id) => {
  const SQLQuery = "DELETE FROM notes WHERE id = ?";
  return dbPool.execute(SQLQuery, [id]);
};

module.exports = {
  getAllNotes,
  getNotesById,
  createNewNotes,
  updateNoteById,
  deleteNotesById
};
