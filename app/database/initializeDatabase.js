import { useSQLiteContext } from 'expo-sqlite/next';

/**
 * Initializes the database by creating necessary tables.
 */
export const initializeDatabase = async () => {
  const db = useSQLiteContext();
  try {
    await db.execAsync(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        endereco TEXT NOT NULL,
        numero TEXT NOT NULL,
        complemento TEXT NOT NULL,
        cep TEXT NOT NULL,
        telefone TEXT NOT NULL
      );`
    );
  } catch (error) {
    console.error('Failed to initialize database:', error);
  }
};