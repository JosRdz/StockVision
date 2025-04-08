import psycopg2

def connect_db():
    conn = psycopg2.connect(
        host='localhost',
        port=5432,
        database='Proyecto',
        user='postgres',
        password='tacos41pastor'
    )
    return conn