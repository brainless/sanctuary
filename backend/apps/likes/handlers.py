from fastapi import APIRouter

from utils.database import database
from .models import likes
from .schema import LikeIn, Like


likes_router = APIRouter()


@likes_router.post("/add-to-reply", response_model=Like)
async def create_like(like: LikeIn):
    query = likes.select().where(
        likes.c.reply_id == like.reply_id
    )
    exiting = await database.fetch_one(query=query)
    likes_count = 1 if not exiting else exiting.likes_count + 1

    query = likes.insert().values(
        reply_id=like.reply_id,
        likes_count=likes_count
    )
    await database.execute(query=query)
    return {
        **like.dict(),
        "likes_count": likes_count
    }
