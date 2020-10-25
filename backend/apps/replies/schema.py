from typing import Optional
from datetime import datetime
from pydantic import BaseModel

from .models import ReplyTypeChoices


class ReplyIn(BaseModel):
    post_id: int
    reply_type: ReplyTypeChoices
    content: str


class Reply(BaseModel):
    id: int
    post_id: int
    reply_type: ReplyTypeChoices
    content: str
    likes_count: Optional[int]
    created_at: datetime


class LikeIn(BaseModel):
    reply_id: int


class Like(BaseModel):
    reply_id: int
    likes_count: int
