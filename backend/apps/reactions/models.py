from sqlalchemy import MetaData, Table, Column, Integer, ForeignKey, JSON


metadata = MetaData()


"""
Reactions are clickable actions a user can take on a post like. These are preset
 items that give a quick love/compassion action for the reader. 
"""
reactions = Table(
    "reactions",
    metadata,

    Column("id", Integer, primary_key=True),
    Column("post_id", Integer, ForeignKey("posts.id"), nullable=False),

    # This is a JSON object containing pairs of (reaction label, count)
    Column("reactions_count_json", JSON, nullable=False),
)
