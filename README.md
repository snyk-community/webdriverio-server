# webdriverio-server

[![npm version](https://badge.fury.io/js/webdriverio-server.svg)](http://badge.fury.io/js/webdriverio-server)
[![build status](https://travis-ci.org/ciena-blueplanet/webdriverio-server.svg?branch=master)](https://travis-ci.org/ciena-blueplanet/webdriverio-server)

If you want a remote server to do selenium testing, this is a better way

## Setup

Setting up a new server for selenium testing requires

1. Prerequisites
1. Installation
1. Starting the webdriverio-server node process

### Prerequisites

These instructions assume that you have set up a server (either Mac or Ubuntu) with the following:

- [NodeJS >= 5.3 (including NPM)](https://github.com/creationix/nvm)
- [Dependencies](https://github.com/webdriverio/webdrivercss) of webdrivercss
- Java runtime environment (ubuntu: `sudo apt-get install -y openjdk-7-jre`)
- Chrome web browser installed

In order to facilitate this for an Ubuntu 14.04 server, the following command can be used:

```
wget -qO- https://raw.githubusercontent.com/ciena-blueplanet/webdriverio-server/master/bin/bootstrap/ubuntu/14.04.sh | bash
```

This will configure a new system capable of running `webdriverio-server` using `xvfb` to allow headless execution of
the Chrome browser to capture screenshots.

### Installation

    npm install -g webdriverio-server
    webdriverio-server-init

The first line will install both the `webdriverio-server` and `webdriver-manager` alongside it. The second line will
initialize the build environment for the `webriverio-server`.

### Starting the webdriver-io server node process

Now you're ready to run the web service which will respond to test-upload requests:

    webdriverio-server

If you'd like to override the port being listened to, or perhaps get some verbose debugging output, you can turn
those on using environment variables

    PORT=3001 DEBUG=server webdriverio-server

## Using the server

The best way to use the server is to utilize the [webdriverio-client](https://github.com/ciena-blueplanet/webdriverio-client) to make test requests.

For an example usage of the client, take a look at [ember-frost-checkbox](https://github.com/ciena-frost/ember-frost-checkbox.git)

# Running the Front End Application

    cd webdriverio-app
    npm install
    npm start

Navigate to localhost:4200 to view the current version of the website

# Frequently Asked Questions

#### Where is the important information stored?

The wdio server contains a secure reds db accessed through a small express application 
where the authorized usernames and corresponding testing tokens are stored.

#### What sensitive computing resources are trying to be protected? 
We are trying to prevent people from breaking the wdio server since anyone can submit node scripts to the server. 
We don't necessarily require authorized ciena developers to submit pull requests before testing through the wdio server.

#### How do we develop trust for random people on the internet to submit pr's?

We develop trust with developers through authorization their accounts with github, which is secure and trustworthy. 

The developer must also have an account that meets certain criteria including

1. The account must be no less than six months old
2. The account must have had at least two contributions to other repositories in the last six months
3. The account must have at least two repositories associated with it

We also use randomly generated 30 character testing tokens securely stored in a database.

