# aws_ses_template_manager

Currently AWS SES has a set of API endpoints to manipulate email templates, however, it lacks a front-end UI to perform such tasks. I've created a simple UI interface for managing AWS Simple Email Service templates. Enjoy :)

## Features
* Basic CRUD API interactions with [SES Template API](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/ses-examples-creating-template.html)

## Installation
1) Clone or download project

2) Open terminal in the project directory

3) Install `node_modules` and `bower_components`
```
npm install
bower install
```
4) Add your AWS IAM credentials
    - Create a new file named `.env` in the project's root directory (same directory as `.env.example`)
    - Copy contents of `.env.example` into the newly created `.env` file
    - Fill in the `.env` file with your corresponding AWS IAM credentials
    (Note: the .env file is included in the `.gitignore` file for security purposes)

5) Start the server. (Note: You must have your IAM credentials properly set up in the `.env` file for the server to run) To start the server, while in the project's root directory, type the following command:
```
nodemon
```
or
```
npm start
```
6) Go to `localhost:9000` (enjoy!)

## Usage
So easy, you can learn it all by watching this 54 second video!

[![SEM Template Manager Demo](http://i3.ytimg.com/vi/dMrgp7DmAio/hqdefault.jpg)](https://youtu.be/dMrgp7DmAio "SEM Template Manager Demo")
