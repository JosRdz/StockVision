from config import connect_db

conn = connect_db()
print("Conectado a la base de datos")

conn.close()