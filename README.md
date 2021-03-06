# Redux Feedback Loop

## Description

This feedback form requires three anonymous numeric scale ratings: 1) to establish a students' self-ranked overall comfort level, 2) grasp of the content presented, 3) whether they feel like they are receiving the support resources they expect.

Optional: the student may include free-form text comments.

Students have the opportunity to review a summary of their entries prior to submmitting their feedback. In addition, after submission, the student may retake the feedback survey.

### GETTING STARTED

The SQL table structure and sample data is available in the data.sql file. Postgres is recommended to host the data and Postico for validating the calls while in development.

Once the database is established, start the server in the terminal

```
npm install
npm run server
```

After confirming the server is running without error, open a separte terminal window and start the client

```
npm run client
```

Additional dependencies need to be installed, please refer to the package.json file.

### TECHNOLOGIES

This project uses HTML/CSS, JavaScript, Node, Express, BodyParser, React, Redux, Axios, Postgres, SQL
