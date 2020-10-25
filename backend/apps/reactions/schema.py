from typing import Dict
from pydantic import BaseModel

from .models import ReactionTypeChoices


class ReactionIn(BaseModel):
    post_id: int
    reaction_type: ReactionTypeChoices


class Reaction(BaseModel):
    id: int
    post_id: int
    reactions_json: Dict
