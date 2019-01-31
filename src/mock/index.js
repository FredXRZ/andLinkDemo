const Mock = require('mockjs');
Mock.mock('/api/login','post',require('./userInfo.json'));