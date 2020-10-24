from datetime import datetime
from pydantic import BaseModel


class PostIn(BaseModel):
    title: str
    content: str


class Post(BaseModel):
    id: int
    title: str
    content: str
    animal_label: str
    created_at: datetime
