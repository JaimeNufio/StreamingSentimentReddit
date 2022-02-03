from http import client
import json, requests, pprint
import praw

keys = open('secret.JSON')
auth = json.load(keys)
keys.close()

print(auth)

reddit = praw.Reddit(
    client_id=auth['client_id'],
    client_secret=auth['client_secret'],
    user_agent=auth['user_agent']
)

for submission in reddit.subreddit("learnpython").hot(limit=10):
    print(submission.title)
    pprint.pprint(vars(submission).keys())