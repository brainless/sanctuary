from sqlalchemy import MetaData, Table, Column, Integer, ForeignKey, JSON


metadata = MetaData()


post_reactions = Table(
    "post_reactions",
    metadata,

    Column("id", Integer, primary_key=True),
    Column("reply_id", Integer, ForeignKey("replies.id"), nullable=False),
    Column("likes_count", Integer, nullable=False),
)
