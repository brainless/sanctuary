from sqlalchemy import MetaData, Table, Column, Integer, ForeignKey, JSON


metadata = MetaData()


"""
Tags are clickable and set on the post level by the author. They can give quick context
 to the post, help in search or to filter out results.
"""
tags = Table(
    "tags",
    metadata,

    Column("id", Integer, primary_key=True),
    Column("post_id", Integer, ForeignKey("posts.id"), nullable=False),

    # This is JSON list/array containing all the selected tags
    Column("tags_list", JSON, nullable=False),
)


def upgrade(migrate_engine):
    metadata.bind = migrate_engine
    _posts = Table("posts", metadata, autoload=True)
    tags.create()


def downgrade(migrate_engine):
    metadata.bind = migrate_engine
    tags.drop()
