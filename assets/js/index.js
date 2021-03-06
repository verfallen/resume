new WOW().init();
new fullpage("#fullpage", {
	//导航
	menu: "#menus",
	lockAnchors: false,
	anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "fifthPage"],
	sectionsColor: [
		"#000000bb",
		"#dddfd4bb",
		"#b0bab1cc",
		"#c2dde6cc",
		"#f2cbbcbb"
	],
	onLeave: function(origin, destination) {
		const index = origin.index;
		const nextIndex = destination.index;

		// 第一页到第二页过渡
		if (index === 0 && nextIndex === 1) {
			$(".section-header")
				.addClass("animated heartBeat")
				.css({ "animation-delay": ".2s" });
			$(".detail")
				.addClass("animated zoomIn")
				.css({ "animation-delay": "2s" });

			$(".row")
				.addClass("animated rotateIn")
				.css({ "animation-delay": ".4s", "animation-duration": "0.2s" });
			const lis = Array.from($(".row li"));
			lis.forEach((li, k) => {
				$(li)
					.addClass(`animated bounce`)
					.css("animation-delay", `${k * 0.2 + 0.8}s`);
			});
		}

		if (index === 1 && nextIndex === 2) {
			$("#thirdSection .section-header")
				.addClass("animated bounceInDown")
				.css({ "animation-delay": ".2s" });
			const $boxs = Array.from($("#thirdSection .box"));
			$boxs.forEach((box, k) => {
				$(box)
					.addClass("animated slideInLeft")
					.css({
						"animation-delay": `${(k % 3) * 0.3 + 0.5}s`,
						"animation-duration": "0.2s"
					});
			});
		}

		if (index === 2 && nextIndex === 3) {
			$("#fourthSection .section-header")
				.addClass("animated bounceInUp")
				.css({ "animation-delay": "2s" });
			const $timeLines = Array.from($("#fourthSection .timeline"));
			$timeLines.forEach((element, k) => {
				const type = k % 2 ? "bounceInRight" : "bounceInLeft";
				$(element)
					.addClass(`animated ${type}`)
					.css({
						"animation-delay": `${k * 0.3 + 0.5}s`
					});
			});
		}
		if (index === 3 && nextIndex === 4) {
			$("#fifthSection .section-header")
				.addClass("animated flash")
				.css({ "animation-delay": ".3s" });
			const projects = Array.from($("#fifthSection .project"));
			projects.forEach((element, k) => {
				let type;
				switch (k % 3) {
				case 0:
					type = "zoomInLeft";
					break;
				case 1:
					type = "zoomIn";
					break;
				default:
					type = "zoomInRight";
					break;
				}

				$(element)
					.addClass(`animated ${type}`)
					.css({
						"animation-delay": `${k * 0.3 + 0.5}s`
					});
			});
		}
	}
});

$(".box").hover(
	function() {
		const overlay = $(this).find(".box-overlay");
		overlay.removeClass(overlay.data("return")).addClass(overlay.data("hover"));
	},
	function() {
		const overlay = $(this).find(".box-overlay");
		overlay.removeClass(overlay.data("hover")).addClass(overlay.data("return"));
	}
);

$(".project1").mouseover(function(event) {
	$(".project1")
		.stop(true, true)
		.animate({ width: "500px", height: "471px" }, 200);
	$(".project2")
		.stop(true, true)
		.animate(
			{ width: "335px", height: "228px", left: "515px", top: "0px" },
			200
		);
	$(".project3")
		.stop(true, true)
		.animate(
			{ width: "335px", height: "228px", left: "865px", top: "0px" },
			200
		);
	$(".project4")
		.stop(true, true)
		.animate(
			{ width: "218px", height: "228px", left: "515px", top: "243px" },
			200
		);
	$(".project5")
		.stop(true, true)
		.animate(
			{ width: "218px", height: "228px", left: "748px", top: "243px" },
			200
		);
	$(".project6")
		.stop(true, true)
		.animate(
			{ width: "218px", height: "228px", left: "981px", top: "243px" },
			200
		);
	event.stopPropagation();
});
$(".project1").mouseout(function(event) {
	$(".project1")
		.stop(true, true)
		.animate({ width: "390px", height: "228px", left: "0px", top: "0px" }, 200);
	$(".project2")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "405px", top: "0px" },
			200
		);
	$(".project3")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "810px", top: "0px" },
			200
		);
	$(".project4")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "0px", top: "243px" },
			200
		);
	$(".project5")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "405px", top: "243px" },
			200
		);
	$(".project6")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "810px", top: "243px" },
			200
		);
	event.stopPropagation();
});

//project2
$(".project2").mouseover(function(event) {
	$(".project1")
		.stop(true, true)
		.animate({ width: "390px", height: "228px", left: "0px", top: "0px" }, 200);
	$(".project2")
		.stop(true, true)
		.animate({ width: "500px", height: "471px" }, 200);
	$(".project3")
		.stop(true, true)
		.animate(
			{ width: "280px", height: "228px", left: "920px", top: "0px" },
			200
		);
	$(".project4")
		.stop(true, true)
		.animate(
			{ width: "187px", height: "228px", left: "0px", top: "243px" },
			200
		);
	$(".project5")
		.stop(true, true)
		.animate(
			{ width: "188px", height: "228px", left: "203px", top: "243px" },
			200
		);
	$(".project6")
		.stop(true, true)
		.animate(
			{ width: "280px", height: "228px", left: "920px", top: "243px" },
			200
		);
	event.stopPropagation(); //  阻止事件冒泡
});
$(".project2").mouseout(function(event) {
	$(".project1")
		.stop(true, true)
		.animate({ width: "390px", height: "228px", left: "0px", top: "0px" }, 200);
	$(".project2")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "405px", top: "0px" },
			200
		);
	$(".project3")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "810px", top: "0px" },
			200
		);
	$(".project4")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "0px", top: "243px" },
			200
		);
	$(".project5")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "405px", top: "243px" },
			200
		);
	$(".project6")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "810px", top: "243px" },
			200
		);
	event.stopPropagation();
});

//project3
$(".project3").mouseover(function(event) {
	$(".project3")
		.stop(true, true)
		.animate(
			{ width: "500px", height: "471px", left: "700px", top: "0px" },
			300
		);
	$(".project1")
		.stop(true, true)
		.animate({ width: "335px", height: "228px", left: "0px", top: "0px" }, 200);
	$(".project2")
		.stop(true, true)
		.animate(
			{ width: "335px", height: "228px", left: "350px", top: "0px" },
			200
		);
	$(".project4")
		.stop(true, true)
		.animate(
			{ width: "218px", height: "228px", left: "0px", top: "243px" },
			200
		);
	$(".project5")
		.stop(true, true)
		.animate(
			{ width: "218px", height: "228px", left: "233px", top: "243px" },
			200
		);
	$(".project6")
		.stop(true, true)
		.animate(
			{ width: "218px", height: "228px", left: "466px", top: "243px" },
			200
		);
	event.stopPropagation(); //  阻止事件冒泡
});
$(".project3").mouseout(function(event) {
	$(".project1")
		.stop(true, true)
		.animate({ width: "390px", height: "228px", left: "0px", top: "0px" }, 200);
	$(".project2")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "405px", top: "0px" },
			200
		);
	$(".project3")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "810px", top: "0px" },
			200
		);
	$(".project4")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "0px", top: "243px" },
			200
		);
	$(".project5")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "405px", top: "243px" },
			200
		);
	$(".project6")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "810px", top: "243px" },
			200
		);
	event.stopPropagation();
});

//project4
$(".project4").mouseover(function(event) {
	$(".project4")
		.stop(true, true)
		.animate({ width: "500px", height: "471px" }, 200);
	$(".project5")
		.stop(true, true)
		.animate(
			{ width: "335px", height: "228px", left: "515px", top: "243px" },
			200
		);
	$(".project6")
		.stop(true, true)
		.animate(
			{ width: "335px", height: "228px", left: "865px", top: "243px" },
			200
		);
	$(".project7")
		.stop(true, true)
		.animate(
			{ width: "218px", height: "228px", left: "515px", top: "486px" },
			200
		);
	$(".project8")
		.stop(true, true)
		.animate(
			{ width: "218px", height: "228px", left: "748px", top: "486px" },
			200
		);
	$(".project9")
		.stop(true, true)
		.animate(
			{ width: "218px", height: "228px", left: "981px", top: "486px" },
			200
		);
	event.stopPropagation(); //  阻止事件冒泡
});
$(".project4").mouseout(function(event) {
	$(".project4")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "0px", top: "243px" },
			200
		);
	$(".project5")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "405px", top: "243px" },
			200
		);
	$(".project6")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "810px", top: "243px" },
			200
		);
	$(".project7")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "0px", top: "486px" },
			200
		);
	$(".project8")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "405px", top: "486px" },
			200
		);
	$(".project9")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "810px", top: "486px" },
			200
		);
	event.stopPropagation();
});

//project5
$(".project5").mouseover(function(event) {
	$(".project4")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "0px", top: "243px" },
			200
		);
	$(".project5")
		.stop(true, true)
		.animate({ width: "500px", height: "471px" }, 200);
	$(".project6")
		.stop(true, true)
		.animate(
			{ width: "280px", height: "228px", left: "920px", top: "243px" },
			200
		);
	$(".project7")
		.stop(true, true)
		.animate(
			{ width: "187px", height: "228px", left: "0px", top: "486px" },
			200
		);
	$(".project8")
		.stop(true, true)
		.animate(
			{ width: "188px", height: "228px", left: "203px", top: "486px" },
			200
		);
	$(".project9")
		.stop(true, true)
		.animate(
			{ width: "280px", height: "228px", left: "920px", top: "486px" },
			200
		);
	event.stopPropagation(); //  阻止事件冒泡
});
$(".project5").mouseout(function(event) {
	$(".project4")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "0px", top: "243px" },
			200
		);
	$(".project5")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "405px", top: "243px" },
			200
		);
	$(".project6")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "810px", top: "243px" },
			200
		);
	$(".project7")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "0px", top: "486px" },
			200
		);
	$(".project8")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "405px", top: "486px" },
			200
		);
	$(".project9")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "810px", top: "486px" },
			200
		);
	event.stopPropagation();
});

//project6
$(".project6").mouseover(function(event) {
	$(".project6")
		.stop(true, true)
		.animate(
			{ width: "500px", height: "471px", left: "700", top: "243px" },
			200
		);
	$(".project4")
		.stop(true, true)
		.animate(
			{ width: "335px", height: "228px", left: "0px", top: "243px" },
			200
		);
	$(".project5")
		.stop(true, true)
		.animate(
			{ width: "335px", height: "228px", left: "350px", top: "243px" },
			200
		);
	$(".project7")
		.stop(true, true)
		.animate(
			{ width: "218px", height: "228px", left: "0px", top: "486px" },
			200
		);
	$(".project8")
		.stop(true, true)
		.animate(
			{ width: "218px", height: "228px", left: "233px", top: "486px" },
			200
		);
	$(".project9")
		.stop(true, true)
		.animate(
			{ width: "218px", height: "228px", left: "466px", top: "486px" },
			200
		);
	event.stopPropagation(); //  阻止事件冒泡
});
$(".project6").mouseout(function(event) {
	$(".project4")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "0px", top: "243px" },
			200
		);
	$(".project5")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "405px", top: "243px" },
			200
		);
	$(".project6")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "810px", top: "243px" },
			200
		);
	$(".project7")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "0px", top: "486px" },
			200
		);
	$(".project8")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "405px", top: "486px" },
			200
		);
	$(".project9")
		.stop(true, true)
		.animate(
			{ width: "390px", height: "228px", left: "810px", top: "486px" },
			200
		);
	event.stopPropagation();
});

$(".project").on("mouseover", function(e) {
	$(e.currentTarget)
		.children(".desc_container")
		.show()
		.css({
			display: "flex",
			alignItems: "center"
		});
});
$(".project").on("mouseout", function(e) {
	$(e.currentTarget)
		.children(".desc_container")
		.hide();
});
