UI_Els = {
  "btn": '`<button class="uibtn" onclick=\'${EF}("${data["id"]}")\'>${data["text"]}</button>`',
  "btn": '`<button class="uibtn" onclick=\'${EF}("${data["id"]}")\'>${data["text"]}</button>`',
  "text": '`<div onclick=\'${EF}("${data["id"]}")\'>${data["text"]}</div>`',
  "col": 'var elsj=data["text"];var els="";for(let i=0;i<elsj.length;i++){elsj[i]["p"]="0";els+=this.addElHtml(JSON.stringify(elsj[i])).outerHTML};`<div style="width:100%;display:flex" onclick=\'${EF}("${data["id"]}")\'>${els}</div>`',
}