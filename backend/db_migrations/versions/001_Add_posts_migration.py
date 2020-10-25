from datetime import datetime
from sqlalchemy import MetaData, Table, Column, Integer, String, Text, DateTime, JSON


metadata = MetaData()


posts = Table(
    "posts",
    metadata,

    Column("id", Integer, primary_key=True),
    Column("title", String(length=100), nullable=False),
    Column("content", Text, nullable=False),

    # Just to lighten the mood, we add a "spirit animal" to a post and show that as the author
    Column("animal_label", String(length=16), nullable=False),

    # This is JSON list/array containing all the selected tags
    Column("tags_list", JSON, nullable=False),

    # This is a JSON object containing pairs of (reaction label, count)
    # Reactions are clickable actions a user can take on a post like. These are preset
    #  items that give a quick love/compassion action for the reader.
    Column("reactions_obj", JSON, nullable=False),

    Column("created_at", DateTime, nullable=False, default=datetime.utcnow),
)


def upgrade(migrate_engine):
    metadata.bind = migrate_engine
    posts.create()


def downgrade(migrate_engine):
    metadata.bind = migrate_engine
    posts.drop()
