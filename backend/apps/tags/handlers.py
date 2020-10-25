from typing import List
from fastapi import APIRouter

from .tags import tags


tags_router = APIRouter()


@tags_router.get("/", response_model=List[str])
async def list_tags():
    """
    List of all tag slugs
    :return: List[str]
    """
    return tags
