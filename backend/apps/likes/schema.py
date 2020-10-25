from pydantic import BaseModel


class LikeIn(BaseModel):
    reply_id: int


class Like(BaseModel):
    reply_id: int
    likes_count: int
