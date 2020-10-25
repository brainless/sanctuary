from fastapi import APIRouter

from utils.database import database
from .models import reactions
from .schema import ReactionIn, Reaction


reactions_router = APIRouter()


@reactions_router.get("/list-for-post/{post_id}", response_model=Reaction)
async def list_reactions(post_id: int):
    """
    Get the combined Reaction(s) count for a given Post
    :param post_id: int Post.id
    :return: List[Reply]
    """
    query = reactions.select().where(
        reactions.c.post_id == post_id
    )
    return await database.fetch_one(query=query)


@reactions_router.post("/add-to-post", response_model=Reaction)
async def create_reaction(reaction: ReactionIn):
    query = reactions.select().where(
        reactions.c.post_id == reaction.post_id
    )
    exiting = await database.fetch_one(query=query)
    reactions_obj = {
        **exiting.reactions_obj,
        reaction.reaction_type: 1
    } if reaction.reaction_type not in exiting.reactions_obj.keys() else {
        **exiting.reactions_obj,
        reaction.reaction_type: exiting.reactions_obj[reaction.reaction_type] + 1
    }

    query = reactions.insert().values(
        post_id=reaction.post_id,
        reactions_obj=reactions_obj
    )
    await database.execute(query=query)
    return {
        **reaction.dict(),
        "reactions_obj": reactions_obj
    }
