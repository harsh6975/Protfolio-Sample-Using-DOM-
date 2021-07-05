var body = document.querySelector(".container");

var row = document.createElement("div");
var col = document.createElement("div");
var upper = document.createElement("div");
var whit = document.createElement("hr");
var nam = document.createElement("div");
var img = document.createElement("img");
var name2 = document.createElement("div")
var border = document.createElement("div");
var lower = document.createElement("div");
var section3 = document.createElement("div");
var profile = document.createElement("h1");
var skill = document.createElement("h1");
var work = document.createElement("h1");
var pp = document.createElement("p");
var ps = document.createElement("p");
var pw = document.createElement("p");
var wc1 = document.createElement("h4");
var pwc1 = document.createElement("p");
var wc2 = document.createElement("h4");
var pwc2 = document.createElement("p");
var wc3 = document.createElement("h4");
var pwc3 = document.createElement("p");
var edu = document.createElement("h1");
var clg = document.createElement("h3")
var pedu = document.createElement("p");
var section4 = document.createElement("div");

body.append(row);
row.append(col);
col.append(upper);
upper.append(img);
upper.append(whit);
upper.append(nam);
col.append(name2);
col.append(border);
col.append(lower);
lower.append(section3);
section3.append(profile);
section3.append(pp);
section3.append(skill);
section3.append(ps);
section3.append(work);
section3.append(pw);
section3.append(wc1);
section3.append(pwc1);
lower.append(section4);
section4.append(wc2);
section4.append(pwc2);
section4.append(wc3);
section4.append(pwc3);
section4.append(edu);
section4.append(clg);
section4.append(pedu);

col.setAttribute(
  "style",
  "display:flex;justify-content:center; flex-direction: column;align-items: center;width:100%;height: fit-content;margin: auto;width: auto;"
);
upper.setAttribute(
  "style",
  "display:flex;justify-content:center; flex-direction: column;align-items: center;margin: 25px;text-align:center; background-color:grey;width: auto;height: auto;padding-bottom:15px;"
);
img.src =
  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

img.setAttribute(
  "style",
  "width:150px;height:150px;margin-top:80px ;border:5px dotted yellow; border-radius:50% 50%;"
);

nam.innerHTML = "John Doe";
nam.setAttribute(
  "style",
  "position:absolute;height:80px;background-color:#ffb300; top:250px;width:350px;padding:15px; height:40px;font-size:30px;left:40%;"
);

whit.setAttribute(
  "style",
  " background-color:white;width: 1100px;height: 20px;padding-bottom:8px;"
);


name2.innerHTML = "Varanasi India  |  +919140780963 | dummyemail.com | www.domain.com";
name2.setAttribute("style","width:100%; text-align:center;");
border.setAttribute(
  "style",
  " border: 2px solid black;width:1100px; margin-top:10px"
);

lower.setAttribute(
  "style",
  "display:flex;justify-content: space-evenly;align-items: center;margin: 25px;text-align:center;width: 1100px;height: auto;padding-bottom:15px;"
);
profile.innerHTML = "Profile";
pp.innerHTML="I am full stack developer with strong fundamentals of Python and JS with hands on experience on Django, Bootstrap and MERN.;"
pp.setAttribute(
  "style",
  "width: fit-content;max-width:500px"
)
skill.innerHTML = "Skill";
ps.innerHTML="I am full stack developer with strong fundamentals of Python and JS with hands on experience on Django, Bootstrap and MERN.;"
ps.setAttribute(
  "style",
  "width: fit-content;max-width:500px"
)
work.innerHTML = "Work Experience";
pw.innerHTML="I am full stack developer with strong fundamentals of Python and JS with hands on experience on Django, Bootstrap and MERN.;"
pw.setAttribute(
  "style",
  "width: fit-content;max-width:500px"
)
wc1.innerHTML = "Company 1";
pwc1.innerHTML="I am full stack developer with strong fundamentals of Python and JS with hands on experience on Django, Bootstrap and MERN.;"
pwc1.setAttribute(
  "style",
  "width: fit-content;max-width:500px"
)
wc2.innerHTML = "Company 2";
pwc2.innerHTML="I am full stack developer with strong fundamentals of Python and JS with hands on experience on Django, Bootstrap and MERN.;"
pwc2.setAttribute(
  "style",
  "width: fit-content;max-width:500px"
)
wc3.innerHTML = "Company 3";
pwc3.innerHTML="I am full stack developer with strong fundamentals of Python and JS with hands on experience on Django, Bootstrap and MERN.;"
pwc3.setAttribute(
  "style",
  "width: fit-content;max-width:500px"
)
edu.innerHTML = "Education";
pedu.innerHTML="I am full stack developer with strong fundamentals of Python and JS with hands on experience on Django, Bootstrap and MERN.;"
pedu.setAttribute(
  "style",
  "width: fit-content;max-width:500px"
)
clg.innerHTML = "IIT BHU";
clg.setAttribute(
  "style",
  "width: fit-content;max-width:500px;margin-left:220px"
)
