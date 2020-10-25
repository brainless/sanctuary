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
    created_at: datetime
