UI_Els = {
  "btn": '`<button onclick=\'${EF}("${data["id"]}")\'>${data["id"]}</button>`',
  "text": '`<div onclick=\'${EF}("${data["id"]}")\'>${data["text"]}</div>`',
  "col": 'var elsh=[];var elsj=data["text"];var els="";for(let i=0;i<elsj.length;i++){elsh[i]=this.addElHtml(JSON.stringify(elsj[i])).getInnerHTML()};for(let i=0;i<elsh.length;i++){els+=elsh[i]};`<div style="width:100%;display:flex" onclick=\'${EF}("${data["id"]}")\'>${els}</div>`',
}