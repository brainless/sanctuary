from fastapi import APIRouter

from utils.database import database
from .models import reactions
from .schema import ReactionIn, Reaction


reactions_router = APIRouter()


@reactions_router.get("/list-for/{post_id}", response_model=Reaction)
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


@reactions_router.post("/reply-to", response_model=Reaction)
async def create_reaction(reaction: ReactionIn):
    query = reactions.select().where(
        reactions.c.post_id == reaction.post_id
    )
    exiting = await database.fetch_one(query=query)
    reactions_json = {
        **exiting.reactions_json,
        reaction.reaction_type: 1
    } if reaction.reaction_type not in exiting.reactions_json.keys() else {
        **exiting.reactions_json,
        reaction.reaction_type: exiting.reactions_json[reaction.reaction_type] + 1
    }

    query = reactions.insert().values(
        post_id=reaction.post_id,
        reactions_json=reactions_json
    )
    last_record_id = await database.execute(query=query)
    return {
        **reaction.dict(),
        "id": last_record_id,
        "reactions_json": reactions_json
    }
