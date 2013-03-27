var element = require("../index")

element("<p>Hello</p><p>World</p>")[0]
// => Hello

element("<p>Hello</p><p>World</p>")[1]
// => World
