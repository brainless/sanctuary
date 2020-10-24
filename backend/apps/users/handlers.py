from fastapi import APIRouter

router = APIRouter()


@router.route("/auth", methods=["POST"])
def authenticate():
    pass
