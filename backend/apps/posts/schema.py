from typing import Dict, List, Optional
from datetime import datetime
from pydantic import BaseModel


class PostIn(BaseModel):
    title: str
    content: str
    tags_list: Optional[List[str]]


class Post(BaseModel):
    id: int
    title: str
    content: str
    animal_label: str
    created_at: datetime
    reactions_obj: Dict
    tags_list: List[str]
