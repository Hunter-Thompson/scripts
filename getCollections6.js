db.getCollectionNames().join('\n')
db.getMongo().setReadPref('primaryPreferred')
