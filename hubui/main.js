class HubUI {
  constructor(id, f) {
    this.ui = document.getElementById(id);
    this.EventFunc=f;
    var data='{"type":"btn", "ID":"btn1", "TEXT":"BTN_TEXT"}';
    console.log(this.getWHtml(JSON.parse(data), this.EventFunc));
  }
  
  getWHtml(data, EF) {
    var elh=eval(UI_Els[data["type"]]);
    return elh;
  }
  
  addEl(data) {
    data=JSON.parse(data);
    var d = document.createElement('div');
    d.id=data["id"];
    if(data['bk']=='1') d.style.background='#26272c';
    d.style.borderRadius='8px';
    d.style.boxShadow='0px 3px 0px 0px inset #ffffff05, 0 0 10px 0px #00000021, 0px -3px 1px 0px inset #00000010';
    //d.style.left='50%';
    //d.style.position='absolute';
    d.innerHTML+=`<div><div>${data['label']}</div></div>`;
    d.innerHTML+="<div style='display: flex;align-items: center;justify-content: center;'>"+this.getWHtml(data, this.EventFunc)+"</div>";
    this.ui.appendChild(d);
  }
  
  pushEvent(id) {
    console.log(`${id}: click`);
  }
}