PRAGMA foreign_keys = ON;

DROP TABLE questions_likes;
DROP TABLE replies;
DROP TABLE question_follows;
DROP TABLE questions;
DROP TABLE users;

CREATE TABLE users(
    id INTEGER PRIMARY KEY,
    fname VARCHAR NOT NULL,
    lname VARCHAR NOT NULL
);

CREATE TABLE questions(
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    author_id INTEGER, 
  
    FOREIGN KEY (author_id) REFERENCES users(id)
);

CREATE TABLE question_follows(
    id INTEGER PRIMARY KEY,
    question_id INTEGER,
    user_id INTEGER, 

    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE replies(
    id INTEGER PRIMARY KEY,
    question_id INTEGER,
    parent_reply_id INTEGER,
    user_id INTEGER,
    body TEXT NOT NULL,

    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (parent_reply_id) REFERENCES replies(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE questions_likes(
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  question_id INTEGER,

  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

-- seeding the database

INSERT INTO 
  users(fname, lname)
VALUES 
  ('Steven', 'Suazo'), 
  ('Alexandria', 'Wong');

INSERT INTO 
  questions(title, body, author_id)
VALUES 
  ('Question 1', 'Body 1', (SELECT id FROM users WHERE fname = 'Steven')), 
  ('Question 2', 'Body 2', (SELECT id FROM users WHERE fname = 'Alexandria'));

INSERT INTO 
  question_follows(question_id, user_id)
VALUES 
  ((SELECT id FROM questions WHERE title = 'Question 1'), 
    (SELECT id FROM users WHERE fname = 'Alexandria')), 
  ((SELECT id FROM questions WHERE title = 'Question 2'),
    (SELECT id FROM users WHERE fname = 'Steven'));

INSERT INTO 
  replies(question_id, parent_reply_id, user_id, body)
VALUES 
  ((SELECT id FROM questions WHERE title = 'Question 1'), 
    NULL, 
    (SELECT id FROM users WHERE fname = 'Alexandria'), 
    'Reply 1');

INSERT INTO 
  replies(question_id, parent_reply_id, user_id, body)
VALUES 
  ((SELECT id FROM questions WHERE title = 'Question 1'), 
    (SELECT id FROM replies WHERE body = 'Reply 1'), 
    (SELECT id FROM users WHERE fname = 'Steven'), 
    'Reply 2');

INSERT INTO 
  questions_likes(user_id, question_id)
VALUES 
  ((SELECT id FROM users WHERE fname = 'Alexandria'),
    (SELECT id FROM questions WHERE title = 'Question 1')), 
  ((SELECT id FROM users WHERE fname = 'Steven'),
    (SELECT id FROM questions WHERE title = 'Question 2'));

