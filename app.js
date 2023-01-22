const express = require("express");
const nunjucks = require("nunjucks");
const stylus = require("stylus");
const nib = require("nib");
const path = require("path");
const fs = require("fs");

const json = require("./assets/json/data.json");

var app = express();

function compile(str, path) {
	return stylus(str)
		.set("filename", path)
		.set("force", true)
		.use(nib());
}

function deleteDir(url) {
	var files = [];

	if (fs.existsSync(url)) {
		//判断给定的路径是否存在

		files = fs.readdirSync(url); //返回文件和子目录的数组
		files.forEach(function (file, index) {
			var curPath = path.join(url, file);

			if (fs.statSync(curPath).isDirectory()) {
				//同步读取文件夹文件，如果是文件夹，则函数回调
				deleteDir(curPath);
			} else {
				fs.unlinkSync(curPath); //是指定文件，则删除
			}
		});

		fs.rmdirSync(url); //清除文件夹
	} else {
		console.log("给定的路径不存在！");
	}
}

nunjucks.configure("views", {
	autoescape: true,
	express: app,
	watch: true
});

app.use(express.static(path.join(__dirname, "assets")));
app.use(express.static(path.join(__dirname, "lib")));

app.use(
	stylus.middleware({
		src: path.join(__dirname, "./assets/stylus"),
		dest: path.join(__dirname, "./assets/style"),
		force: true,
		compress: true,
		compile: compile
	})
);

app.get("/", function (req, res) {
	const data = Object.assign(json, { js: "index", css: "index" });
	data.menu.forEach((v, k) => {
		v.delay = k * 0.2;
	});
	data.links.forEach((v, k) => {
		v.delay = k * 0.1 + 1.2;
	});
	data.projects.details.forEach((v, k) => {
		v.index = k + 1;
	});
	res.render("index.html", data);
});

app.get("/:filename.html", function (req, res, next) {
	const filename = req.params.filename;

	const csspath = path.join(__dirname, `assets/css${filename}.css`);
	const jspath = path.join(__dirname, `assets/js/${filename}.js`);
	const data = Object.assign({}, json);
	try {
		if (fs.existsSync(csspath)) {
			data.css = filename;
		}

		if (fs.existsSync(jspath)) {
			data.js = filename;
		}

		res.render(`${filename}.njk`, data);
	} catch (error) {
		next(error);
	}
});

fs.watch("./assets/stylus/stylesheets", { recursive: true }, function () {
	deleteDir("./assets/style/stylesheets");
});

app.listen(3001);
console.log('Sever is running at : http://127.0.0.1:3001');
