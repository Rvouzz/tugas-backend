const { dbPool } = require("../core/config");

const getAllNotes = () => {
  const SQLQuery = "SELECT * FROM notes";
  return dbPool.execute(SQLQuery);
};

const getNotesById = (id) => {
  const SQLQuery = "SELECT * FROM notes WHERE id = ?";
  return dbPool.execute(SQLQuery, [id]);
};

const createNewNotes = async (title, datetime, note) => {
  const datetimeParam = datetime || null;
  const existingNotes = await dbPool.execute("SELECT * FROM notes WHERE title = ?", [title]);

  if (existingNotes[0].length > 0) {
    return { error: "Title already exists" };
  }

  const SQLQuery = "INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)";
  return dbPool.execute(SQLQuery, [title, datetimeParam, note]);
};


const updateNoteById = (id, title, datetime, note) => {
  const SQLQuery =
    "UPDATE notes SET title = ?, datetime = ?, note = ? WHERE id = ?";
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
  deleteNotesById,
};
