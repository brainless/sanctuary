from datetime import datetime
from sqlalchemy import MetaData, Table, Column, Integer, String, Text, DateTime


metadata = MetaData()


posts = Table(
    "posts",
    metadata,

    Column("id", Integer, primary_key=True),
    Column("title", String(length=100), nullable=False),
    Column("content", Text, nullable=False),

    # Just to lighten the mood, we add a "spirit animal" to a post and show that as the author
    Column("animal_label", String(length=16), nullable=False),

    Column("created_at", DateTime, nullable=False, default=datetime.utcnow()),
)
