from datetime import datetime
from enum import Enum as PyEnum
from sqlalchemy import MetaData, Table, Column, Integer, Text, Enum, DateTime, ForeignKey


metadata = MetaData()


class ReplyTypeChoices(PyEnum):
    text = "TEXT"
    voice = "VOICE"
    gif = "GIF"


replies = Table(
    "replies",
    metadata,

    Column("id", Integer, primary_key=True),
    Column("post_id", Integer, ForeignKey("posts.id"), nullable=False),

    Column(
        "reply_type",
        Enum(ReplyTypeChoices, values_callable=lambda x: [e.value for e in x]),
        nullable=False
    ),

    # For gif and voice, the content will be URLs to the saved media
    Column("content", Text, nullable=False),

    Column("created_at", DateTime, nullable=False, default=datetime.utcnow()),
)


def upgrade(migrate_engine):
    metadata.bind = migrate_engine
    _posts = Table("posts", metadata, autoload=True)
    replies.create()


def downgrade(migrate_engine):
    metadata.bind = migrate_engine
    replies.drop()
