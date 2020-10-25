from enum import Enum

from sqlalchemy import MetaData, Table, Column, Integer, ForeignKey, JSON


metadata = MetaData()


class ReactionTypeChoices(Enum):
    rt_e_heart = "e_heart"
    rt_e_hugging_face = "e_hugging_face"
    rt_e_muscle = "e_muscle"

    rt_t_been_there_understand = "t_been_there_understand"
    rt_t_hang_in_wishing_well = "t_hang_in_wishing_well"


"""
Reactions are clickable actions a user can take on a post like. These are preset
 items that give a quick love/compassion action for the reader. 
"""
reactions = Table(
    "reactions",
    metadata,

    Column("id", Integer, primary_key=True),
    Column("post_id", Integer, ForeignKey("posts.id"), nullable=False, unique=True),

    # This is a JSON object containing pairs of (reaction label, count)
    Column("reactions_obj", JSON, nullable=False),
)
