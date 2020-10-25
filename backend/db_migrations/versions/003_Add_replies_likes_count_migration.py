from sqlalchemy import MetaData, Table, Column, Integer


metadata = MetaData()


def upgrade(migrate_engine):
    metadata.bind = migrate_engine
    _replies = Table("replies", metadata, autoload=True)
    col = Column("likes_count", Integer, nullable=True)
    col.create(_replies)


def downgrade(migrate_engine):
    metadata.bind = migrate_engine
    _replies = Table("replies", metadata, autoload=True)
    _replies.c.likes_count.drop()
