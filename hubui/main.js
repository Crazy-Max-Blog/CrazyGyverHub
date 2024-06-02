class HubUI {
  constructor(id, f) {
    this.ui = document.getElementById(id);
    this.EventFunc=f;
    var data='{"type":"btn", "id":"btn1", "text":"BTN_TEXT"}';
    console.log(this.getWHtml(JSON.parse(data), this.EventFunc));
  }
  
  getWHtml(data, EF) {
    var elh=eval(UI_Els[data["type"]]);
    return elh;
  }
  
  addElHtml(data) {
    data=JSON.parse(data);
    var dd = document.createElement('div');
    dd.id=data["id"];
    dd.style.padding='3px';
    dd.style.width='100%';
    var d = document.createElement('div');
    if(data['bk']=='1') {
        d.style.background='#26272c';
        d.style.borderRadius='8px';
        d.style.boxShadow='0px 3px 0px 0px inset #ffffff05, 0 0 10px 0px #00000021, 0px -3px 1px 0px inset #00000010';
    }
    d.style.width='100%';
    //d.style.position='absolute';
    d.style.padding='1px';
    d.innerHTML+=`<div style='border:3px solid transparent;color:#919191;'><div>${data['label']}</div></div>`;
    d.innerHTML+=`<div style='display: flex;align-items: center;justify-content: center;border:3px solid transparent'>${this.getWHtml(data, this.EventFunc)}</div>`;
    dd.appendChild(d);
    return dd;
  }
  
  addEl(data) {
    this.ui.appendChild(this.addElHtml(data));
  }
  
  pushEvent(id) {
    console.log(`${id}: click`);
  }
}