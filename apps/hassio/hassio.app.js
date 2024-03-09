Modules.addCached("Layout",function(){function p(d,h){function b(e){"ram";e.id&&(a[e.id]=e);e.type||(e.type="");e.c&&e.c.forEach(b)}this._l=this.l=d;this.options=h||{};this.lazy=this.options.lazy||!1;this.physBtns=1;let f;if(2!=process.env.HWVERSION){this.physBtns=3;f=[];function e(l){"ram";"btn"==l.type&&f.push(l);l.c&&l.c.forEach(e)}e(d);f.length&&(this.physBtns=0,this.buttons=f,this.selectedButton=-1)}if(this.options.btns)if(d=this.options.btns,this.physBtns>=d.length){this.b=d;let e=Math.floor(Bangle.appRect.h/
this.physBtns);for(2<this.physBtns&&1==d.length&&d.unshift({label:""});this.physBtns>d.length;)d.push({label:""});this._l.width=g.getWidth()-8;this._l={type:"h",filly:1,c:[this._l,{type:"v",pad:1,filly:1,c:d.map(l=>(l.type="txt",l.font="6x8",l.height=e,l.r=1,l))}]}}else this._l.width=g.getWidth()-32,this._l={type:"h",c:[this._l,{type:"v",c:d.map(e=>(e.type="btn",e.filly=1,e.width=32,e.r=1,e))}]},f&&f.push.apply(f,this._l.c[1].c);this.setUI();var a=this;b(this._l);this.updateNeeded=!0}function t(d,
h,b,f,a){var e=null==d.bgCol?a:g.toColor(d.bgCol);if(e!=a||"txt"==d.type||"btn"==d.type||"img"==d.type||"custom"==d.type){var l=d.c;delete d.c;var k="H"+E.CRC32(E.toJS(d));l&&(d.c=l);delete h[k]||((f[k]=[d.x,d.y,d.x+d.w-1,d.y+d.h-1]).bg=null==a?g.theme.bg:a,b&&(b.push(d),b=null))}if(d.c)for(var c of d.c)t(c,h,b,f,e)}p.prototype.setUI=function(){Bangle.setUI();let d;this.buttons&&(Bangle.setUI({mode:"updown",back:this.options.back,remove:this.options.remove},h=>{var b=this.selectedButton,f=this.buttons.length;
if(void 0===h&&this.buttons[b])return this.buttons[b].cb();this.buttons[b]&&(delete this.buttons[b].selected,this.render(this.buttons[b]));b=(b+f+h)%f;this.buttons[b]&&(this.buttons[b].selected=1,this.render(this.buttons[b]));this.selectedButton=b}),d=!0);!this.options.back&&!this.options.remove||d||Bangle.setUI({mode:"custom",back:this.options.back,remove:this.options.remove});if(this.b){function h(b,f){.75<f.time-f.lastTime&&this.b[b].cbl?this.b[b].cbl(f):this.b[b].cb&&this.b[b].cb(f)}Bangle.btnWatches&&
Bangle.btnWatches.forEach(clearWatch);Bangle.btnWatches=[];this.b[0]&&Bangle.btnWatches.push(setWatch(h.bind(this,0),BTN1,{repeat:!0,edge:-1}));this.b[1]&&Bangle.btnWatches.push(setWatch(h.bind(this,1),BTN2,{repeat:!0,edge:-1}));this.b[2]&&Bangle.btnWatches.push(setWatch(h.bind(this,2),BTN3,{repeat:!0,edge:-1}))}if(2==process.env.HWVERSION){function h(b,f){b.cb&&f.x>=b.x&&f.y>=b.y&&f.x<=b.x+b.w&&f.y<=b.y+b.h&&(2==f.type&&b.cbl?b.cbl(f):b.cb&&b.cb(f));b.c&&b.c.forEach(a=>h(a,f))}Bangle.touchHandler=
(b,f)=>h(this._l,f);Bangle.on("touch",Bangle.touchHandler)}};p.prototype.render=function(d){function h(c){"ram";b.reset();void 0!==c.col&&b.setColor(c.col);void 0!==c.bgCol&&b.setBgColor(c.bgCol).clearRect(c.x,c.y,c.x+c.w-1,c.y+c.h-1);f[c.type](c)}d||(d=this._l);this.updateNeeded&&this.update();var b=g,f={"":function(){},txt:function(c){"ram";if(c.wrap){var m=b.setFont(c.font).setFontAlign(0,-1).wrapString(c.label,c.w),n=c.y+(c.h-b.getFontHeight()*m.length>>1);b.drawString(m.join("\n"),c.x+(c.w>>
1),n)}else b.setFont(c.font).setFontAlign(0,0,c.r).drawString(c.label,c.x+(c.w>>1),c.y+(c.h>>1))},btn:function(c){"ram";var m=c.x+(0|c.pad),n=c.y+(0|c.pad),q=c.w-(c.pad<<1),r=c.h-(c.pad<<1);m=[m,n+4,m+4,n,m+q-5,n,m+q-1,n+4,m+q-1,n+r-5,m+q-5,n+r-1,m+4,n+r-1,m,n+r-5,m,n+4];n=void 0!==c.btnBorderCol?c.btnBorderCol:b.theme.fg2;q=void 0!==c.btnFaceCol?c.btnFaceCol:b.theme.bg2;c.selected&&(q=b.theme.bgH,n=b.theme.fgH);b.setColor(q).fillPoly(m).setColor(n).drawPoly(m);void 0!==c.col&&b.setColor(c.col);c.src?
b.setBgColor(q).drawImage("function"==typeof c.src?c.src():c.src,c.x+c.w/2,c.y+c.h/2,{scale:c.scale||void 0,rotate:.5*Math.PI*(c.r||0)}):b.setFont(c.font||"6x8:2").setFontAlign(0,0,c.r).drawString(c.label,c.x+c.w/2,c.y+c.h/2)},img:function(c){"ram";b.drawImage("function"==typeof c.src?c.src():c.src,c.x+c.w/2,c.y+c.h/2,{scale:c.scale||void 0,rotate:.5*Math.PI*(c.r||0)})},custom:function(c){"ram";c.render(c)},h:function(c){"ram";c.c.forEach(h)},v:function(c){"ram";c.c.forEach(h)}};if(this.lazy){this.rects||
(this.rects={});var a=this.rects.clone(),e=[];t(d,a,e,this.rects,null);for(var l in a)delete this.rects[l];d=Object.keys(a).map(c=>a[c]).reverse();for(var k of d)b.setBgColor(k.bg).clearRect.apply(g,k);e.forEach(h)}else h(d)};p.prototype.forgetLazyState=function(){this.rects={}};p.prototype.layout=function(d){var h={h:function(b){"ram";var f=b.x+(0|b.pad),a=0,e=b.c&&b.c.reduce((k,c)=>k+(0|c.fillx),0);e||(f+=b.w-b._w>>1,e=1);var l=f;b.c.forEach(k=>{k.x=0|l;f+=k._w;a+=0|k.fillx;l=f+Math.floor(a*(b.w-
b._w)/e);k.w=0|l-k.x;k.h=0|(k.filly?b.h-(b.pad<<1):k._h);k.y=0|b.y+(0|b.pad)+((1+(0|k.valign))*(b.h-(b.pad<<1)-k.h)>>1);if(k.c)h[k.type](k)})},v:function(b){"ram";var f=b.y+(0|b.pad),a=0,e=b.c&&b.c.reduce((k,c)=>k+(0|c.filly),0);e||(f+=b.h-b._h>>1,e=1);var l=f;b.c.forEach(k=>{k.y=0|l;f+=k._h;a+=0|k.filly;l=f+Math.floor(a*(b.h-b._h)/e);k.h=0|l-k.y;k.w=0|(k.fillx?b.w-(b.pad<<1):k._w);k.x=0|b.x+(0|b.pad)+((1+(0|k.halign))*(b.w-(b.pad<<1)-k.w)>>1);if(k.c)h[k.type](k)})}};if(h[d.type])h[d.type](d)};p.prototype.debug=
function(d,h){d||(d=this._l);h=h||1;g.setColor(h&1,h&2,h&4).drawRect(d.x+h-1,d.y+h-1,d.x+d.w-h,d.y+d.h-h);d.pad&&g.drawRect(d.x+d.pad-1,d.y+d.pad-1,d.x+d.w-d.pad,d.y+d.h-d.pad);h++;d.c&&d.c.forEach(b=>this.debug(b,h))};p.prototype.update=function(){function d(a){"ram";b[a.type](a);if(a.r&1){var e=a._w;a._w=a._h;a._h=e}a._w=Math.max(a._w+(a.pad<<1),0|a.width);a._h=Math.max(a._h+(a.pad<<1),0|a.height)}delete this.updateNeeded;var h=g,b={txt:function(a){"ram";a.font.endsWith("%")&&(a.font="Vector"+Math.round(h.getHeight()*
a.font.slice(0,-1)/100));if(a.wrap)a._h=a._w=0;else{var e=g.setFont(a.font).stringMetrics(a.label);a._w=e.width;a._h=e.height}},btn:function(a){"ram";a.font&&a.font.endsWith("%")&&(a.font="Vector"+Math.round(h.getHeight()*a.font.slice(0,-1)/100));var e=a.src?h.imageMetrics("function"==typeof a.src?a.src():a.src):h.setFont(a.font||"6x8:2").stringMetrics(a.label);a._h=16+e.height;a._w=20+e.width},img:function(a){"ram";var e=h.imageMetrics("function"==typeof a.src?a.src():a.src),l=a.scale||1;a._w=e.width*
l;a._h=e.height*l},"":function(a){"ram";a._w=0;a._h=0},custom:function(a){"ram";a._w=0;a._h=0},h:function(a){"ram";a.c.forEach(d);a._h=a.c.reduce((e,l)=>Math.max(e,l._h),0);a._w=a.c.reduce((e,l)=>e+l._w,0);null==a.fillx&&a.c.some(e=>e.fillx)&&(a.fillx=1);null==a.filly&&a.c.some(e=>e.filly)&&(a.filly=1)},v:function(a){"ram";a.c.forEach(d);a._h=a.c.reduce((e,l)=>e+l._h,0);a._w=a.c.reduce((e,l)=>Math.max(e,l._w),0);null==a.fillx&&a.c.some(e=>e.fillx)&&(a.fillx=1);null==a.filly&&a.c.some(e=>e.filly)&&
(a.filly=1)}},f=this._l;d(f);delete b;f.fillx||f.filly?(f.w=Bangle.appRect.w,f.h=Bangle.appRect.h,f.x=Bangle.appRect.x,f.y=Bangle.appRect.y):(f.w=f._w,f.h=f._h,f.x=Bangle.appRect.w-f.w>>1,f.y=Bangle.appRect.y+(Bangle.appRect.h-f.h>>1));this.layout(f)};p.prototype.clear=function(d){d||(d=this._l);g.reset();void 0!==d.bgCol&&g.setBgColor(d.bgCol);g.clearRect(d.x,d.y,d.x+d.w-1,d.y+d.h-1)};exports=p
});

if (HASSIO === undefined) {
  loadHassio();
}

function noHassio() {
  let Layout = require('Layout');
  let layout = new Layout( {
    type:"v", c: [
      {
        type: "txt",
        font: "10%",
        label: "No settings",
      },
    ],
    halign: -1
  });
  g.clear();
  layout.render();
}

const templateGui = () => {
  if (HASSIO === undefined) {
    noHassio();
    return;
  }

  let selectedTemplate = 0;

  let Layout = require('Layout');
  let layout = new Layout( {
    type:"v", c: [
      {
        type: "txt",
        font: "8%",
        id: "name",
        label: HASSIO.templates[selectedTemplate].name,
      },
      {
        type: 'txt',
        font:"10%",
        id: "data",
        label: "data",
        wrap: true,
        width: g.getWidth(),
        height: g.getHeight()-80,
        halign: -1
      },
      {
        type: "txt",
        font: "8%",
        id: "loc",
        label: (selectedTemplate+1) + "/" + HASSIO.templates.length,
      }
    ],
    halign: -1
  });

  const fetchTemplate = (template) => {
    const url = `${HASSIO.host}/api/template`;
    return Bangle.http(url, {
        method: "POST",
        timeout: 2000,
        body: JSON.stringify({template: template}),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${HASSIO.api_key}`,
        }
    });
  };

  const draw = (selected) => {
    setTimeout(() => {
      if (selected != selectedTemplate)
        return;

      fetchTemplate(HASSIO.templates[selectedTemplate].temp).then((data) => {
        if (selected != selectedTemplate)
          return;

        layout.data.label = data.resp;
        layout.clear(layout.data);
        layout.render();
      }, (data) => {
        if (selected != selectedTemplate)
          return;

        layout.data.label = "failed " + JSON.stringify(data);
        layout.clear(layout.data);
        layout.render();
      });
    }, 1000);
  };

  Bangle.on('touch', function(button, xy) {
    if (xy.type === 0) {
      selectedTemplate++;
      if (selectedTemplate >= HASSIO.templates.length)
        selectedTemplate = 0;
      layout.loc.label = (selectedTemplate+1) + "/" + HASSIO.templates.length;
      layout.name.label = HASSIO.templates[selectedTemplate].name
    }

    layout.data.label = "loading";
    g.clear();
    layout.render();
    draw(selectedTemplate)
  });


  g.clear();
  layout.data.label = "loading";
  layout.render();
  draw(selectedTemplate);
};

templateGui();