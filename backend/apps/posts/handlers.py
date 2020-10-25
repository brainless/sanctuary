from datetime import datetime
from random import choice
from typing import List
from fastapi import APIRouter

from utils.database import database
from .models import posts
from .schema import PostIn, Post
from .animals import animals


posts_router = APIRouter()


@posts_router.get("/", response_model=List[Post])
async def list_posts():
    query = posts.select()
    return await database.fetch_all(query=query)


@posts_router.get("/{post_id}/", response_model=Post)
async def get_post(post_id: int):
    query = posts.select().where(
        posts.c.id == post_id
    )
    return await database.fetch_one(query=query)


@posts_router.post("/", response_model=Post)
async def create_post(post: PostIn):
    animal_label = choice(list(animals.keys()))
    created_at = datetime.utcnow()

    query = posts.insert().values(
        title=post.title,
        content=post.content,
        animal_label=animal_label,
        created_at=created_at
    )
    last_record_id = await database.execute(query=query)
    return {
        **post.dict(),
        "id": last_record_id,
        "animal_label": animal_label,
        "created_at": created_at,
        "reactions_obj": {}
    }
