from datetime import datetime
from typing import List
from fastapi import APIRouter

from utils.database import database
from .models import replies
from .schema import ReplyIn, Reply, LikeIn, Like


replies_router = APIRouter()


@replies_router.get("/list-for-post/{post_id}/", response_model=List[Reply])
async def list_replies(post_id: int):
    """
    List Reply(ies) for a given Post
    :param post_id: int Post.id
    :return: List[Reply]
    """
    query = replies.select().where(
        replies.c.post_id == post_id
    )
    return await database.fetch_all(query=query)


@replies_router.post("/add-to-post/", response_model=Reply)
async def create_reply(reply: ReplyIn):
    created_at = datetime.utcnow()

    query = replies.insert().values(
        post_id=reply.post_id,
        reply_type=reply.reply_type,
        content=reply.content,
        created_at=created_at
    )
    last_record_id = await database.execute(query=query)
    return {
        **reply.dict(),
        "id": last_record_id,
        "created_at": created_at
    }


@replies_router.post("/add-like/", response_model=Like)
async def add_like(like: LikeIn):
    query = replies.select().where(
        replies.c.id == like.reply_id
    )
    exiting = await database.fetch_one(query=query)
    likes_count = 1 if exiting.likes_count is None else exiting.likes_count + 1

    query = replies.update().values(
        likes_count=likes_count
    ).where(
        replies.c.id == like.reply_id
    )
    await database.execute(query=query)
    return {
        **like.dict(),
        "likes_count": likes_count
    }
