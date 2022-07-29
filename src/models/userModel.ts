import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Iuser } from '../interfaces/Iuser';

async function create(user: Iuser): Promise<Iuser > {
  const { username, classe, level, password } = user;
  
  const query = 'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES(?,?,?,?)';
  
  const [newUer] = await connection.execute<ResultSetHeader>(
    query,
    [username, classe, level, password],
  );
  const result = {
    id: newUer.insertId,
    username,
    classe,
    level,
    password,
  };

  return result;
}

export default { create };