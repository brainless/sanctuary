from enum import Enum


class ReactionValueTypeChoices(Enum):
    rvt_emoji = "emoji"
    rvt_text = "text"
    rvt_gif = "gif"
    rvt_voice = "voice"


class ReactionTypeChoices(Enum):
    rt_e_heart = (ReactionValueTypeChoices.rvt_emoji, "heart")
    rt_e_hugging_face = (ReactionValueTypeChoices.rvt_emoji, "hugging_face")
    rt_e_muscle = (ReactionValueTypeChoices.rvt_emoji, "muscle")

    rt_t_been_there_understand = (ReactionValueTypeChoices.rvt_text, "been_there_understand")
    rt_t_hang_in_wishing_well = (ReactionValueTypeChoices.rvt_text, "hang_in_wishing_well")
