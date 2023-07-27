# SSC Website Web Scraping Project

![SSC Website Web Scraping]

Welcome to the SSC Website Web Scraping project! This Node.js application allows you to monitor the notice board of the SSC (Staff Selection Commission) website for a specific word and sends an email notification via Formspree when the word is found in the top-most child of the homepage notice board.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Task Scheduling](#task-scheduling)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Staff Selection Commission (SSC) website is regularly updated with new notices and information. This web scraping project aims to automate the process of checking the top-most child of the notice board on the homepage for a specific word of interest. Once the word is detected, the application will send an email notification using Formspree, which can be useful for staying up-to-date with important announcements.

## Features

- Automated web scraping of the SSC website notice board.
- Searching for a specific word in the top-most notice.
- Sending email notifications via Formspree when the word is found.
- Easy configuration and setup.

## Prerequisites

Before getting started, ensure you have the following installed:

- [Node.js](https://nodejs.org) (v12 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/ssc-website-web-scraping.git
cd ssc-website-web-scraping
```

## Configuration

Before running the application, you need to configure some settings:

1. Register on https://formspree.io/

2. Set your Formspree API endpoint URL and other email configuration parameters.


## Usage

To start the web scraping process, simply run the following command:

```bash
node index
```

The application will connect to the SSC website, scrape the top-most notice from the notice board, and check if the specific word is present. If the word is found, an email notification will be sent via Formspree.

## Task Scheduling

You can schedule this web scraping task to run at specific intervals using the inbuilt task scheduler on your Windows PC. To do this:

1. Open Task Scheduler on your Windows PC.
2. Create a new task and specify the trigger (e.g., daily, hourly).
3. Set the action to run the `node index` command in the project directory.
4. Save the task, and it will automatically execute the web scraping process at the specified intervals.

## Contributing

We welcome contributions to improve this project! If you find any issues or want to add new features, please submit a pull request. Make sure to follow the code style and add appropriate documentation.

## License

This project is licensed under the [MIT License](LICENSE).

---
Happy web scraping! If you have any questions or feedback, feel free to contact me.

Project maintained by [Punit Saini](https://github.com/punit-saini).
