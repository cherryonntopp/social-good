// STATISTICS FACT GENERATOR // 

var factList = [
	"Science: 21% of bachelor’s degrees in physics were earned by women in 2017",
	"Technology: Only 19% of computer science degrees were awarded to women in 2016 (down from 27% in 1997). 20% of computer scientists in the U.S. of 2019 were women.",
	"Engineering: 20% of engineering undergraduate degrees were awarded to women in 2015. 13% of working engineering women in 2019.",
	"Mathematics: 15% of mathematics teaching jobs are held by women."
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

factBtn.addEventListener("click", displayFact);

if (factBtn) {
	factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}


// DID YOU KNOW FACT GENERATOR // 

var factList2 = [
	"Computer programming used to be considered a “woman’s job” as the proportion of women represented in the field peaked during the 1980s. Soon enough, when its difficulty began increasing, it shifted as a job that needed to be done by men. ",
	"There are limited examples of female scientists and engineers that serve as role models to young girls. Furthermore, there are even fewer minority female models in math and science.",
	"Before anything can be tested true, boys are most likely to have confidence in their math skills by 2nd grade while girls begin to lose confidence in 3rd grade.",
	"The annual salaries of males in STEM are nearly $15,000 higher per year than women. Additionally, Latina and Black women in STEM earn about $33,333 less.",
	"Gender stereotypes still persist; STEM fields are often viewed as masculine, hence being very male-dominated, and girls are often underestimated for their math abilities starting at very early ages.",
	"Even though about 80% of healthcare workers are women, only about 21% of executives and board members are women, and 33% are doctors.",
	"It’s been revealed that some of the most famous scientists, authors, and mathematicians have had help from their wives! Their wives have contributed great amounts to their work, but receive no credit.",
];

var fact2 = document.getElementById("fact2");
var factBtn2 = document.getElementById("factBtn2");
var count2 = 0;

factBtn2.addEventListener("click", displayFact2);

if (factBtn2) {
	factBtn2.addEventListener("click", displayFact2);
}

function displayFact2() {
  fact2.innerHTML = factList2[count2];
  count2++;
  if (count2 == factList2.length) {
    count2 = 0;
  }
}


// GENERATE EMAIL SCRIPT // 

var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

function generateScript() {
	var name = document.getElementById("name").value;
	var place = document.getElementById("place").value;
	var teaching = document.getElementById("teaching").value;
	var specialty = document.getElementById("specialty").value;

	displayScript.innerHTML = "Dear " + place + ", my name is " + name + ". I am striving to introduce younger children to STEM fields to promote curiosity and motivation. The gender gap in STEM still persists today, with a great imbalance. As I specialize in " + specialty + ", I would like to have a chance to have a presentation to the younger audiences and " + teaching + ". Exposure is a very important aspect in the beginning of a child's growing interest toward a specific topic. Thank you so much, and I would be very grateful if I am given the chance to.";
}
