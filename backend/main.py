from fastapi import FastAPI

from utils.database import database
from apps.posts.handlers import posts_router


app = FastAPI()


@app.on_event("startup")
async def startup():
    await database.connect()


@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()


@app.get("/")
async def api_home():
    return {"status": "ok"}


app.include_router(
    posts_router,
    prefix="/posts"
)
