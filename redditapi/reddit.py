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

def subreddit():
    for submission in reddit.subreddit("learnpython").hot(limit=10):
        print(submission.title)
        pprint.pprint(vars(submission).keys())

def userComments(user):
    #look intogenerator
    comments = reddit.redditor(user).comments.top('all',limit=None);

    cnt = 0;
    for x in comments:
        cnt+=1
        #print(x.body[:144],str(cnt))
        pprint.pprint(vars(x))
        #body
        #id
        #link_author    -
        #link_id        -
        #link_perma     -
        #link_title     - 
        #link_url       -
        #num_comments   -
        #permalink
        #score
        #subreddit_id   -
        #subreddit_name_prefixed    -
        #ups
        return


userComments('thinkingwithportal')

"""
Goals

Basically, we aim to make a spider. 
We want to be able to target a single subreddit. 
We want to get top posts.
We want to get all comments from that page.
We want to be able to keep track of posts as they are update? ## Is pgsql a good choice?
-> Crawl via subreddits related to user?

We want to find users
we want to be able to get all posts.
We want to be able to keep track.
"""