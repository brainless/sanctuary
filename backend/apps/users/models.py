from datetime import datetime
from sqlalchemy import MetaData, Table, Column, Integer, String, DateTime


metadata = MetaData()


users = Table(
    "users",
    metadata,

    Column("id", Integer, primary_key=True),
    Column("email", String(length=100), nullable=False),
    Column("animal_name", String(length=40), nullable=False),

    Column("created_at", DateTime, nullable=False, default=datetime.utcnow()),
)
