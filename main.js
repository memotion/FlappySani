function _0x1b71(){const _0x426093=['PipeSpeedInterval','log','width','22101ZaoKYy','touchmove','1442857uRcBZN','input','clearRect','score:\x20','14WVemlk','gameOver','click','Swipe\x20up\x20to\x20start','height','speed','10ybyIRt','keys','update','3104814EsOuUr','4455621QDFSHn','touchstart','canvas1','20596OFSJhU','here','getContext','130MCygSn','getElementById','addEventListener','score','draw','player','pipes','reset','fillStyle','30px\x20sans-serif','background','restore','fillText','forEach','pipeTimer','push','changedTouches','save','enableToStart','1114472esxJnT','resetGame','passed','10IbmhnE','242nOGmpX','touchY','restartButton','pipeInterval','font','pageY','gameFrame','white','PipeSpeedTimer','touchend','splice','1391508AhSPtE'];_0x1b71=function(){return _0x426093;};return _0x1b71();}function _0x5ca8(_0xba152e,_0x4c0b45){const _0x1b714e=_0x1b71();return _0x5ca8=function(_0x5ca854,_0x3f471f){_0x5ca854=_0x5ca854-0x145;let _0x7ecfb7=_0x1b714e[_0x5ca854];return _0x7ecfb7;},_0x5ca8(_0xba152e,_0x4c0b45);}const _0x57b67e=_0x5ca8;(function(_0x3921a2,_0x2cb027){const _0xd52db8=_0x5ca8,_0x2b6f07=_0x3921a2();while(!![]){try{const _0x410d54=-parseInt(_0xd52db8(0x17a))/0x1+-parseInt(_0xd52db8(0x152))/0x2*(-parseInt(_0xd52db8(0x178))/0x3)+parseInt(_0xd52db8(0x14f))/0x4*(parseInt(_0xd52db8(0x168))/0x5)+parseInt(_0xd52db8(0x14b))/0x6*(-parseInt(_0xd52db8(0x17e))/0x7)+-parseInt(_0xd52db8(0x165))/0x8+-parseInt(_0xd52db8(0x14c))/0x9*(-parseInt(_0xd52db8(0x148))/0xa)+parseInt(_0xd52db8(0x169))/0xb*(parseInt(_0xd52db8(0x174))/0xc);if(_0x410d54===_0x2cb027)break;else _0x2b6f07['push'](_0x2b6f07['shift']());}catch(_0x69a8e3){_0x2b6f07['push'](_0x2b6f07['shift']());}}}(_0x1b71,0xe02c8));import{Player}from'./player.js';import{InputHandler}from'./inputHandler.js';import{Background}from'./background.js';import{TopPipe,BottomPipe}from'./obstacle.js';window[_0x57b67e(0x154)]('load',function name(_0x2e7a1a){const _0x6d7af2=_0x57b67e,_0x147a93=document[_0x6d7af2(0x153)](_0x6d7af2(0x14e)),_0x19b264=document[_0x6d7af2(0x153)]('startButton'),_0x23400a=document[_0x6d7af2(0x153)](_0x6d7af2(0x16b)),_0xe847ee=_0x147a93[_0x6d7af2(0x151)]('2d');_0x147a93[_0x6d7af2(0x177)]=0x1c2,_0x147a93['height']=0x320;class _0x1e692b{constructor(_0xe5e0d0,_0xa1edd7){const _0x584b7a=_0x6d7af2;this[_0x584b7a(0x164)]=![],this[_0x584b7a(0x17f)]=0x1,this['resetGame']=0x0,this['width']=_0xe5e0d0,this[_0x584b7a(0x146)]=_0xa1edd7,this[_0x584b7a(0x147)]=0x1,this['background']=new Background(this),this[_0x584b7a(0x157)]=new Player(this),this[_0x584b7a(0x17b)]=new InputHandler(this),this[_0x584b7a(0x155)]=0x0,this['gameFrame']=0x0,this['pipes']=[],this[_0x584b7a(0x160)]=0x0,this[_0x584b7a(0x16c)]=0x3e8,this[_0x584b7a(0x171)]=0x0,this[_0x584b7a(0x175)]=0x1388,this['PipespeedX']=0x5;}[_0x6d7af2(0x14a)](_0x5bd76f){const _0x45355b=_0x6d7af2;this[_0x45355b(0x158)][_0x45355b(0x15f)](_0x2a0083=>{const _0x3fb5d3=_0x45355b;_0x2a0083['update'](),_0x2a0083[_0x3fb5d3(0x167)]&&(this[_0x3fb5d3(0x158)][_0x3fb5d3(0x173)](this[_0x3fb5d3(0x158)]['indexOf'](_0x2a0083),0x1),this[_0x3fb5d3(0x155)]+=0.5);}),this[_0x45355b(0x157)]['update'](_0x5bd76f,this[_0x45355b(0x17b)]['keys']),this[_0x45355b(0x15c)][_0x45355b(0x14a)]();if(this['pipeTimer']>this[_0x45355b(0x16c)])this['addPipes'](),this[_0x45355b(0x160)]=0x0;else this[_0x45355b(0x160)]+=_0x5bd76f;}['draw'](_0x10894a){const _0x33473c=_0x6d7af2;this[_0x33473c(0x15c)]['draw'](_0x10894a),this[_0x33473c(0x158)]['forEach'](_0x3105da=>{const _0x4af04c=_0x33473c;_0x3105da[_0x4af04c(0x156)](_0x10894a);}),this[_0x33473c(0x157)][_0x33473c(0x156)](_0x10894a),_0x10894a[_0x33473c(0x163)](),_0x10894a[_0x33473c(0x15a)]=_0x33473c(0x170),_0x10894a[_0x33473c(0x16d)]=_0x33473c(0x15b),_0x10894a['fillText'](_0x33473c(0x17d)+this['score'],0x5,0x2d),_0x10894a[_0x33473c(0x15d)](),this[_0x33473c(0x17f)]==0x1&&(_0x10894a[_0x33473c(0x163)](),_0x10894a[_0x33473c(0x15a)]='white',_0x10894a[_0x33473c(0x16d)]=_0x33473c(0x15b),_0x10894a[_0x33473c(0x15e)](_0x33473c(0x145),this[_0x33473c(0x177)]/0x4,this[_0x33473c(0x146)]/0x2),_0x10894a[_0x33473c(0x15d)]());}['reset'](){const _0x18e868=_0x6d7af2;this[_0x18e868(0x16f)]=0x0,this[_0x18e868(0x158)]=[],this[_0x18e868(0x160)]=0x0,this[_0x18e868(0x16c)]=0x3e8,this[_0x18e868(0x171)]=0x0,this[_0x18e868(0x175)]=0x1388,this['PipespeedX']=0x5,this[_0x18e868(0x17f)]=0x1,this[_0x18e868(0x166)]=0x0,this['input'][_0x18e868(0x149)]=[],this[_0x18e868(0x155)]=0x0,this[_0x18e868(0x157)][_0x18e868(0x159)]();}['addPipes'](){const _0x314a5d=_0x6d7af2;let _0x4d6691=new TopPipe(this,this['PipespeedX']);this['pipes']['push'](_0x4d6691),this[_0x314a5d(0x158)][_0x314a5d(0x161)](new BottomPipe(_0x4d6691));}}const _0x3766c6=new _0x1e692b(_0x147a93[_0x6d7af2(0x177)],_0x147a93[_0x6d7af2(0x146)]);let _0x5afcd3=0x0;function _0x24aa70(_0x496e28){const _0x4f55c3=_0x6d7af2;let _0x3bd1f1=_0x496e28-_0x5afcd3;_0x5afcd3=_0x496e28,_0xe847ee[_0x4f55c3(0x17c)](0x0,0x0,_0x147a93[_0x4f55c3(0x177)],_0x147a93[_0x4f55c3(0x146)]),_0x3766c6[_0x4f55c3(0x14a)](_0x3bd1f1),_0x3766c6[_0x4f55c3(0x156)](_0xe847ee);if(_0x3766c6[_0x4f55c3(0x17f)]==0x0)requestAnimationFrame(_0x24aa70);_0x3766c6[_0x4f55c3(0x166)]==0x1&&(_0x3766c6[_0x4f55c3(0x159)](),requestAnimationFrame(_0x24aa70));}_0x19b264[_0x6d7af2(0x154)](_0x6d7af2(0x180),()=>{const _0x2efb63=_0x6d7af2;_0x3766c6[_0x2efb63(0x164)]=!![],console[_0x2efb63(0x176)](_0x2efb63(0x150));}),_0x23400a[_0x6d7af2(0x154)](_0x6d7af2(0x180),()=>_0x3766c6[_0x6d7af2(0x164)]=!![]),window[_0x6d7af2(0x154)](_0x6d7af2(0x14d),_0x11e4b4=>{const _0x221e66=_0x6d7af2;_0x3766c6['input'][_0x221e66(0x16a)]=_0x11e4b4[_0x221e66(0x162)][0x0][_0x221e66(0x16e)];}),window[_0x6d7af2(0x154)](_0x6d7af2(0x179),_0xb1dcc6=>{const _0x51d8db=_0x6d7af2,_0x573897=_0xb1dcc6[_0x51d8db(0x162)][0x0][_0x51d8db(0x16e)]-_0x3766c6[_0x51d8db(0x17b)]['touchY'];_0x3766c6[_0x51d8db(0x17f)]==0x1&&(_0x573897<-_0x3766c6[_0x51d8db(0x17b)]['touchTreshold']&&(_0x3766c6[_0x51d8db(0x164)]&&(_0x3766c6[_0x51d8db(0x17f)]=0x0,_0x24aa70(0x0))));}),window[_0x6d7af2(0x154)](_0x6d7af2(0x172),_0x52abd3=>{}),_0x24aa70(0x0);});