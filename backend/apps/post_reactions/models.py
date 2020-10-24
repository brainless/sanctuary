from sqlalchemy import MetaData, Table, Column, Integer, ForeignKey, JSON


metadata = MetaData()


post_reactions = Table(
    "post_reactions",
    metadata,

    Column("id", Integer, primary_key=True),
    Column("post_id", Integer, ForeignKey("posts.id"), nullable=False),
    Column("reactions_count_json", JSON, nullable=False),
)
