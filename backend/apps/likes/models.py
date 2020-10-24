from sqlalchemy import MetaData, Table, Column, Integer, ForeignKey, JSON


metadata = MetaData()


"""
Likes are like a voting up action that a user can take on a reply (not post).
"""
likes = Table(
    "likes",
    metadata,

    Column("id", Integer, primary_key=True),
    Column("reply_id", Integer, ForeignKey("replies.id"), nullable=False),
    Column("likes_count", Integer, nullable=False),
)
