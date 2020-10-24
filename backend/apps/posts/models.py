from datetime import datetime
from sqlalchemy import MetaData, Table, Column, Integer, String, Text, DateTime


metadata = MetaData()


posts = Table(
    "posts",
    metadata,

    Column("id", Integer, primary_key=True),
    Column("title", String(length=100), nullable=False),
    Column("content", Text, nullable=False),

    Column("created_at", DateTime, nullable=False, default=datetime.utcnow()),
)
