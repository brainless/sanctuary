from sqlalchemy import MetaData, Table, Column, Integer, ForeignKey, JSON


metadata = MetaData()


reactions = Table(
    "reactions",
    metadata,

    Column("id", Integer, primary_key=True),
    Column("post_id", Integer, ForeignKey("posts.id"), nullable=False, unique=True),

    # This is a JSON object containing pairs of (reaction label, count)
    Column("reactions_count_json", JSON, nullable=False),
)


def upgrade(migrate_engine):
    metadata.bind = migrate_engine
    _posts = Table("posts", metadata, autoload=True)
    reactions.create()


def downgrade(migrate_engine):
    metadata.bind = migrate_engine
    reactions.drop()
