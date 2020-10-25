from sqlalchemy import MetaData, Table, Column, Integer, ForeignKey


metadata = MetaData()


"""
Likes are like a voting up action that a user can take on a reply (not post).
"""
likes = Table(
    "likes",
    metadata,

    Column("id", Integer, primary_key=True),
    Column("reply_id", Integer, ForeignKey("replies.id"), nullable=False, unique=True),
    Column("likes_count", Integer, nullable=False),
)


def upgrade(migrate_engine):
    metadata.bind = migrate_engine
    _replies = Table("replies", metadata, autoload=True)
    likes.create()


def downgrade(migrate_engine):
    metadata.bind = migrate_engine
    likes.drop()
