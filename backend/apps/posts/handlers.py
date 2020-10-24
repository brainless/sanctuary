from random import choice
from typing import List
from fastapi import APIRouter

from utils.database import database
from .models import posts
from .schema import PostIn, Post
from .animals import animals


router = APIRouter()


@router.get("/list", response_model=List[Post])
def list_posts():
    pass


@router.post("/create", response_model=Post)
async def create_post(post: PostIn):
    animal_label = choice(list(animals.keys()))
    query = posts.insert().values(
        title=post.title,
        content=post.content,
        animal_label=animal_label
    )
    last_record_id = await database.execute(query=query)
    return {
        **post.dict(),
        "id": last_record_id,
        "animal_label": animal_label
    }
