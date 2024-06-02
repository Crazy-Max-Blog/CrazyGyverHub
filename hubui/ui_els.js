UI_Els = {
  "btn": "HubUI_btn",
  "text": '`<div onclick=\'${EF}("${data["id"]}")\'>${data["text"]}</div>`',
  "col": 'var elsj=data["text"];var els="";for(let i=0;i<elsj.length;i++){elsj[i]["p"]="0";els+=this.addElHtml(JSON.stringify(elsj[i])).outerHTML};`<div style="width:100%;display:flex" onclick=\'${EF}("${data["id"]}")\'>${els}</div>`',
}

class HubUI_btn {
    constructor(data, EF) {
        this.data=data;
        this.EF=EF;
        this.p=0;
        console.log(this.getHtml());
    }
    
    getHtml() {
        return `<button class="uibtn" onclick=\'eventF("${this.data["id"]}")\'>${this.data["text"]}</button>`
    }
    
    eventF(id) {
        eval(`${this.EF}(${id})`);
    }
}