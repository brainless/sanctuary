from fastapi import APIRouter

from utils.database import database
from apps.posts.models import posts
from .schema import ReactionIn, Reaction


reactions_router = APIRouter()


@reactions_router.post("/add-to-post", response_model=Reaction)
async def create_reaction(reaction: ReactionIn):
    query = posts.select().where(
        posts.c.id == reaction.post_id
    )
    exiting = await database.fetch_one(query=query)
    reactions_obj = {
        **exiting.reactions_obj,
        reaction.reaction_type: 1
    } if reaction.reaction_type not in exiting.reactions_obj.keys() else {
        **exiting.reactions_obj,
        reaction.reaction_type: exiting.reactions_obj[reaction.reaction_type] + 1
    }

    query = posts.update().values(
        reactions_obj=reactions_obj
    ).where(
        id=reaction.post_id
    )
    await database.execute(query=query)
    return {
        **reaction.dict(),
        "reactions_obj": reactions_obj
    }
