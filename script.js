const canvas = document.getElementById("card"),
    ctx = canvas.getContext("2d");

let cardData = {
    pic: undefined
}
// <3 https://stackoverflow.com/a/21961894
function drawImageProp(ctx, img, x, y, w, h, offsetX, offsetY) {

    if (arguments.length === 2) {
        x = y = 0;
        w = ctx.canvas.width;
        h = ctx.canvas.height;
    }

    // default offset is center
    offsetX = typeof offsetX === "number" ? offsetX : 0.5;
    offsetY = typeof offsetY === "number" ? offsetY : 0.5;

    // keep bounds [0.0, 1.0]
    if (offsetX < 0) offsetX = 0;
    if (offsetY < 0) offsetY = 0;
    if (offsetX > 1) offsetX = 1;
    if (offsetY > 1) offsetY = 1;

    var iw = img.width,
        ih = img.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r,   // new prop. width
        nh = ih * r,   // new prop. height
        cx, cy, cw, ch, ar = 1;

    // decide which gap to fill    
    if (nw < w) ar = w / nw;
    if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
    nw *= ar;
    nh *= ar;

    // calc source rectangle
    cw = iw / (nw / w);
    ch = ih / (nh / h);

    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;

    // make sure source rectangle is valid
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;

    // fill image in dest. rectangle
    ctx.drawImage(img, cx, cy, cw, ch, x, y, w, h);
}

function drawCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.shadowBlur = 5;
    ctx.shadowOffsetY = 2;
    ctx.shadowColor = "rgba(0,0,0,0.25)";
    ctx.fillStyle = "#fff";
    ctx.fillRect(15, 25, 370, 220);

    ctx.shadowColor = "transparent";
    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;

    ctx.fillStyle = "#e5e5e5";
    ctx.fillRect(15, 25, 100, 140);

    const {
        role,
        class1,
        class2,
        pic,
        name,
        age,
        sex,
        gender,
        circle1,
        circle2,
        circle3,
        circle4,
        circle5,
        circle6,
        player,
        cross1,
        cross2,
        cross3,
        cross4,
        cross5,
        cross6
    } = cardData;

    if (pic) {
        let source = {};
        source.width = Math.min(100, (pic.width * pic.height) * 140);
        source.height = Math.min(140, (pic.height * pic.width) * 100);

        drawImageProp(ctx, pic, 15, 25, 100, 140)
    }

    ctx.font = "bold 24px 'Roboto', sans-serif";
    ctx.textAlign = "center";

    if (!name) {
        ctx.fillStyle = "#999";
    } else {
        ctx.fillStyle = "#222";
    }

    ctx.fillText(name || "Character Name", 250, 50);

    ctx.font = "14px 'Roboto', sans-serif";
    ctx.textAlign = "right";
    ctx.fillStyle = "#444";

    ctx.fillText(age || "", 200, 85);
    ctx.fillText(sex || "", 290, 85);
    ctx.fillText(gender || "", 380, 85);

    ctx.font = "10px 'Roboto', sans-serif";
    ctx.textAlign = "left";

    ctx.fillText("Age:", 120, 70);
    ctx.fillText("Sex:", 210, 70);
    ctx.fillText("Gender:", 300, 70);
    ctx.fillText("Player:", 17, 175);

    ctx.font = "20px 'Roboto', sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "#555";
    ctx.fillText("/", 250, 110);

    ctx.font = "16px 'Roboto', sans-serif";

    if (!class1) {
        ctx.fillStyle = "#999";
    } else {
        ctx.fillStyle = "#222";
    }

    ctx.textAlign = "right";
    ctx.fillText(class1 || "Class 1", 240, 110);

    if (!class2) {
        ctx.fillStyle = "#999";
    } else {
        ctx.fillStyle = "#222";
    }

    ctx.textAlign = "left";
    ctx.fillText(class2 || "Class 2", 260, 110);

    if (!role) {
        ctx.fillStyle = "#999";
    } else {
        ctx.fillStyle = "#222";
    }

    ctx.textAlign = "center";
    ctx.font = "14px 'Roboto', sans-serif";

    ctx.fillText(role || "Role", 250, 130);

    ctx.fillStyle = "#666";
    ctx.textAlign = "left";
    
    ctx.beginPath();
    ctx.arc(125, 145, 4, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(125, 165, 4, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(125, 185, 4, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(250, 145, 4, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(250, 165, 4, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(250, 185, 4, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillText(circle1 || "", 135, 150);
    ctx.fillText(circle2 || "", 135, 170);
    ctx.fillText(circle3 || "", 135, 190);
    ctx.fillText(circle4 || "", 260, 150);
    ctx.fillText(circle5 || "", 260, 170);
    ctx.fillText(circle6 || "", 260, 190);

    ctx.textAlign = "right";

    if (!player) {
        ctx.fillStyle = "#999";
    } else {
        ctx.fillStyle = "#222";
    }

    ctx.fillText(player || "Your Username", 115, 190);

    ctx.fillStyle = "#666";
    ctx.strokeStyle = "#666";
    ctx.lineWidth = 2;

    function cross(x, y ,r = 5) {
        ctx.beginPath();
        ctx.moveTo(x - r, y - r);
        ctx.lineTo(x + r, y + r);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x + r, y - r);
        ctx.lineTo(x - r, y + r);
        ctx.stroke();
    }

    cross(25, 210);
    cross(25, 230);

    cross(145, 210);
    cross(145, 230);

    cross(265, 210);
    cross(265, 230);

    ctx.textAlign = "left";

    ctx.fillText(cross1 || "", 35, 215);
    ctx.fillText(cross2 || "", 35, 235);

    ctx.fillText(cross3 || "", 155, 215);
    ctx.fillText(cross4 || "", 155, 235);

    ctx.fillText(cross5 || "", 275, 215);
    ctx.fillText(cross6 || "", 275, 235);

    ctx.fillStyle = "#bbb";

    // Border bellow the name
    ctx.fillRect(115, 55, 270, 1);

    // Border separating Age, Sex and Gender
    ctx.fillRect(205, 55, 1, 35);
    ctx.fillRect(295, 55, 1, 35);

    // Border bellow age sex gender
    ctx.fillRect(115, 90, 270, 1);

    // Border between the class and role
    ctx.fillRect(210, 115, 80, 1);

    // Broder bellow the role
    ctx.fillRect(115, 135, 270, 1);

    // Border bellow the circles
    ctx.fillRect(15, 195, 370, 1);

    // Border around the pic
    //ctx.fillRect(15,165,100,1);
    //ctx.fillRect(115,25,1,140);

    document.getElementById("download").href = canvas.toDataURL();
}

function copyCanvas() {
    // <3 https://stackoverflow.com/a/45582858
    function SelectText(element) {
        var doc = document;
        if (doc.body.createTextRange) {
            var range = document.body.createTextRange();
            range.moveToElementText(element);
            range.select();
        } else if (window.getSelection) {
            var selection = window.getSelection();
            var range = document.createRange();
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }

    var img = document.createElement('img');
    img.src = canvas.toDataURL()

    var div = document.createElement('div');
    div.contentEditable = true;
    div.appendChild(img);
    document.body.appendChild(div);

    // do copy
    SelectText(div);
    console.log(document.execCommand('copy'));
    //document.body.removeChild(div);
}

function handleImage(e) {
    var reader = new FileReader();
    reader.onload = function (event) {
        var img = new Image();
        img.onload = function () {
            cardData.pic = img;
            drawCanvas();
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
}

function handleText(e) {
    preventOverflow(e);

    cardData[e.target.id] = e.target.value;
    drawCanvas();
}

function ensurePrefix(prefix) {
    return function (e) {
        for (let i = 0; i < prefix.length; i++) {
            if (e.target.value[i] !== prefix[i]) {
                e.target.value = e.target.value.slice(0, i) + prefix[i] + e.target.value.slice(i);
            }
        }

        handleText(e);
    }
}

function preventOverflow(e) {
    var style = window.getComputedStyle(e.target, null);
    ctx.font = `${style.getPropertyValue("font-weight")} ${style.getPropertyValue("font-size")} ${style.getPropertyValue("font-family")}`;

    while (ctx.measureText(e.target.value).width > parseFloat(style.getPropertyValue("width"))) {
        e.target.value = e.target.value.substr(0, e.target.value.length - 1);
    }
}

function mixtape(file, filename) {
    return new Promise((resolve, reject) => {
        if (typeof file === "string") {
            let dataURI = file,
                byteString = atob(dataURI.split(',')[1]),
                mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0],
                ab = new ArrayBuffer(byteString.length),
                ia = new Uint8Array(ab);

            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }

            file = new Blob([ab], { type: mimeString });
        }

        var formData = new FormData();
        formData.append("files[]", file, filename);

        var request = new XMLHttpRequest();
        request.open("POST", "https://mixtape.moe/upload.php", true);
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                var response = JSON.parse(request.responseText);

                if (response.success) {
                    resolve(response);
                } else {
                    reject(response);
                }
            }
        };
        request.setRequestHeader("accept", "application/json");
        request.send(formData);
    });
}

function uploadCanvas() {
    document.getElementById("upload").classList.add("loading");

    mixtape(canvas.toDataURL(), "card.png").then(response => {
        document.getElementById("upload").classList.remove("loading");
        document.getElementById("link-container").classList.remove("hidden");
        document.getElementById("link").value = response.files[0].url;
    }).catch(err => {
        document.getElementById("upload").classList.remove("loading");
        console.error(err);
        alert("Something went wrong when trying to upload the file...\nTry to upload again, see if it helps\nIf it doesn't, please tell message Pizzacus#2795 on Discord\nError was logged to the console.");
    })
}

document.getElementById("pic").addEventListener('change', handleImage, false);
document.getElementById("name").addEventListener('input', handleText, false);

document.getElementById("age").addEventListener('input', handleText, false);
document.getElementById("sex").addEventListener('input', handleText, false);
document.getElementById("gender").addEventListener('input', handleText, false);

document.getElementById("class1").addEventListener('input', handleText, false);
document.getElementById("class2").addEventListener('input', handleText, false);

document.getElementById("role").addEventListener('input', handleText, false);

document.getElementById("circle1").addEventListener('input', handleText, false);
document.getElementById("circle2").addEventListener('input', handleText, false);
document.getElementById("circle3").addEventListener('input', handleText, false);
document.getElementById("circle4").addEventListener('input', handleText, false);
document.getElementById("circle5").addEventListener('input', handleText, false);
document.getElementById("circle6").addEventListener('input', handleText, false);

document.getElementById("player").addEventListener('input', handleText, false);

document.getElementById("cross1").addEventListener('input', handleText, false);
document.getElementById("cross2").addEventListener('input', handleText, false);
document.getElementById("cross3").addEventListener('input', handleText, false);
document.getElementById("cross4").addEventListener('input', handleText, false);
document.getElementById("cross5").addEventListener('input', handleText, false);
document.getElementById("cross6").addEventListener('input', handleText, false);

document.getElementById("upload").addEventListener('click', uploadCanvas, false);

drawCanvas();