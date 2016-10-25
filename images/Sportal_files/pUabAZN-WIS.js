if (self.CavalryLogger) { CavalryLogger.start_js(["xyRkY"]); }

__d('FBOverlayBase.react',['React'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('React').Component);i=h&&h.prototype;j.prototype.render=function(){'use strict';return c('React').Children.only(this.props.children);};function j(){'use strict';h.apply(this,arguments);}f.exports=j;},null);
__d('FBOverlayElement.react',['cx','React','joinClasses'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes,l={horizontal:{left:"_32rg",right:"_32rh",fit:c('joinClasses')("_32rg","_32rh")},vertical:{top:"_32ri",bottom:"_32rj",fit:c('joinClasses')("_32ri","_32rj")}};i=babelHelpers.inherits(m,c('React').Component);j=i&&i.prototype;m.prototype.render=function(){'use strict';var n=c('React').Children.only(this.props.children),o=c('joinClasses')(n.props.className,"_32rk",l.horizontal[this.props.horizontal],l.vertical[this.props.vertical]);return c('React').cloneElement(n,{className:o});};function m(){'use strict';i.apply(this,arguments);}m.propTypes={horizontal:k.oneOf(['left','right','fit']),vertical:k.oneOf(['top','bottom','fit'])};m.defaultProps={horizontal:'fit',vertical:'fit'};f.exports=m;},null);
__d('FBOverlayContainer.react',['cx','invariant','FBOverlayBase.react','FBOverlayElement.react','React','joinClasses'],function a(b,c,d,e,f,g,h,i){var j,k;if(c.__markCompiled)c.__markCompiled();j=babelHelpers.inherits(l,c('React').Component);k=j&&j.prototype;l.prototype.render=function(){'use strict';return (c('React').createElement('div',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_23n-")}),this.props.children));};function l(){'use strict';j.apply(this,arguments);}l.propTypes={children:function(m,n){var o=m[n],p=0;c('React').Children.forEach(o,function(q){if(q===null||q===undefined)return;switch(q.type){case c('FBOverlayBase.react'):p++;break;case c('FBOverlayElement.react'):break;default:i(0);}});!(p===1)?i(0):void 0;}};f.exports=l;},null);
__d('AdsMessageBox.react',['cx','FBOverlayBase.react','FBOverlayContainer.react','FBOverlayElement.react','Image.react','ImageBlock.react','React','XUICloseButton.react'],function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').PureComponent);j=i&&i.prototype;l.prototype.render=function(){var m=null;if(this.props.onClose){var n=this.props.backgroundColor==='blue'?'light':'dark';m=c('React').createElement(c('FBOverlayElement.react'),{horizontal:'right',vertical:'top'},c('React').createElement(c('XUICloseButton.react'),{className:"_3-8j",shade:n,onClick:this.props.onClose}));}var o=void 0;if(this.props.imageSrc){o=c('React').createElement(c('ImageBlock.react'),{spacing:'medium'},c('React').createElement(c('Image.react'),{className:"_3-90",src:this.props.imageSrc}),this.props.children);}else o=this.props.children;return (c('React').createElement(c('FBOverlayContainer.react'),this.props,c('React').createElement(c('FBOverlayBase.react'),null,c('React').createElement('div',{className:"_1g2y"+(this.props.backgroundColor==='white'?' '+"_1g2z":'')+(this.props.backgroundColor==='blue'?' '+"_1g2-":'')+(this.props.backgroundColor==='gray'?' '+"_ywr":'')+(this.props.backgroundColor==='light-blue'?' '+"_4k2z":'')+(this.props.backgroundColor==='light-gray'?' '+"_2-6w":'')+(this.props.shadow?' '+"_1g2_":'')+(m!==null?' '+"_1g30":'')+(this.props.fadeIn?' '+"_1g31":'')+(this.props.border==='thin'?' '+"_3ljj":'')+(this.props.border==='thin-blue'?' '+"_3ljk":'')+(this.props.border==='thick'?' '+"_3ljl":'')},o)),m));};function l(){i.apply(this,arguments);}l.propTypes={backgroundColor:k.oneOf(['light-blue','blue','white','gray','light-gray']),border:k.oneOf(['thick','thin','thin-blue']),shadow:k.bool,fadeIn:k.bool,imageSrc:k.object,onClose:k.func};l.defaultProps={backgroundColor:'blue',fadeIn:true,shadow:true};f.exports=l;},null);
__d('AbstractStepper.react',['cx','invariant','Event','Keys','React','ReactDOM','cloneWithProps_DEPRECATED','emptyFunction','joinClasses'],function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l,m;if(c.__markCompiled)c.__markCompiled();var n=c('React').PropTypes;j=babelHelpers.inherits(o,c('React').PureComponent);k=j&&j.prototype;o.prototype.render=function(){var p=this.props,q=p.children,r=p.className,s=p.currentStep,t=babelHelpers.objectWithoutProperties(p,['children','className','currentStep']),u=c('React').Children.count(q);!(s<u)?i(0):void 0;q=c('React').Children.map(q,function(v,w){return c('cloneWithProps_DEPRECATED')(v,babelHelpers['extends']({ref:w,currentStep:s,index:w,totalSteps:u},t));});r=c('joinClasses')(r,"_3vmz");return (c('React').createElement('div',babelHelpers['extends']({},t,{className:r}),c('React').createElement('ol',{className:"_3vm-"},q)));};function o(){j.apply(this,arguments);}o.propTypes={currentStep:n.number,onStepSelected:n.func};o.defaultProps={currentStep:0,onStepSelected:c('emptyFunction')};o.Step=(m=l=function(){var p,q;p=babelHelpers.inherits(r,c('React').PureComponent);q=p&&p.prototype;function r(){var s,t;'use strict';for(var u=arguments.length,v=Array(u),w=0;w<u;w++)v[w]=arguments[w];return s=(t=q.constructor).call.apply(t,[this].concat(v)),this.onKeyPress=function(x){if(c('Event').getKeyCode(x)===c('Keys').RETURN)this.props.onStepSelected(this.props.index);}.bind(this),this.onMouseOver=function(){this.props.onStepHovered(this.props.index);}.bind(this),this.onClick=function(){this.props.onStepSelected(this.props.index);}.bind(this),s;}r.prototype.componentDidMount=function(){'use strict';this.$_class1=c('Event').listen(c('ReactDOM').findDOMNode(this),'keypress',this.onKeyPress);this.$_class2=c('Event').listen(c('ReactDOM').findDOMNode(this),'mouseover',this.onMouseOver);};r.prototype.componentWillUnmount=function(){'use strict';this.$_class1.remove();this.$_class2.remove();};r.prototype.render=function(){'use strict';var s=this.props,t=s.children,u=s.className,v=s.style,w=s.index,x=s.currentStep,y=s.totalSteps;u=c('joinClasses')(u,(w===x?"_3vm_":'')+(w===0?' '+"_3vn0":'')+(w===y-1?' '+"_3vn1":'')+(' '+"_3vn2")+(w<x?' '+"_3vn3":''));return (c('React').createElement('li',{style:v,className:u},t,c('React').createElement('div',{tabIndex:1,className:"_28zg",onClick:this.onClick})));};return r;}(),l.propTypes={currentStep:n.number,index:n.number,onStepSelected:n.func,onStepHovered:n.func,totalSteps:n.number},l.defaultProps={onStepSelected:c('emptyFunction'),onStepHovered:c('emptyFunction')},m);f.exports=o;},null);
__d('StepperAnimation',['invariant','Animation','mixInEventEmitter'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={done:true,go:true},j=function(n){!!n?h(0):void 0;};function k(n){'use strict';this.$StepperAnimation1=new (c('Animation'))(n);this.$StepperAnimation1.ondone(this.emit.bind(this,'done'));this.__fired__=false;}k.prototype.from=function(){'use strict';this.$StepperAnimation1.from.apply(this.$StepperAnimation1,arguments);return this;};k.prototype.to=function(){'use strict';this.$StepperAnimation1.to.apply(this.$StepperAnimation1,arguments);return this;};k.prototype.ease=function(){'use strict';this.$StepperAnimation1.ease.apply(this.$StepperAnimation1,arguments);return this;};k.prototype.go=function(){'use strict';j(this.__fired__);this.__fired__=true;this.$StepperAnimation1.go();this.emit('go');return this;};k.prototype.checkpoint=function(){'use strict';this.$StepperAnimation1.checkpoint.apply(this.$StepperAnimation1,arguments);return this;};k.prototype.show=function(){'use strict';this.$StepperAnimation1.show.apply(this.$StepperAnimation1,arguments);return this;};k.prototype.duration=function(){'use strict';this.$StepperAnimation1.duration.apply(this.$StepperAnimation1,arguments);return this;};k.prototype.stop=function(){'use strict';this.$StepperAnimation1.stop.apply(this.$StepperAnimation1,arguments);return this;};function l(n){'use strict';this.$SerialAnimations1=n||[];this.$SerialAnimations2=0;for(var o=0,p=n.length;o<p;o++){var q=n[o+1];if(q)n[o].addListener('done',q.go.bind(q));}if(this.$SerialAnimations1.length){var r=this.emit.bind(this,'go');this.$SerialAnimations1[0].addListener('go',r);var s=this.emit.bind(this,'done');this.$SerialAnimations1.slice(-1)[0].addListener('done',s);}}l.prototype.go=function(){'use strict';j(this.__fired__);this.__fired__=true;this.$SerialAnimations1.length&&this.$SerialAnimations1[0].go();this.emit('go');return this;};l.prototype.stop=function(){'use strict';for(var n=0,o=this.$SerialAnimations1.length;n<o;n++)this.$SerialAnimations1[n].stop.apply(this.$SerialAnimations1[n],arguments);return this;};l.prototype.duration=function(){'use strict';for(var n=0,o=this.$SerialAnimations1.length;n<o;n++)this.$SerialAnimations1[n].duration.apply(this.$SerialAnimations1[n],arguments);return this;};function m(n){'use strict';this.$ParallelAnimations1=n||[];this.$ParallelAnimations2=0;for(var o=0;o<n.length;o++)n[o].addListener('done',this.$ParallelAnimations3.bind(this));}m.prototype.$ParallelAnimations3=function(){'use strict';if(++this.$ParallelAnimations2===this.$ParallelAnimations1.length)this.emit('done');};m.prototype.go=function(){'use strict';j(this.__fired__);this.__fired__=true;for(var n=0;n<this.$ParallelAnimations1.length;n++)this.$ParallelAnimations1[n].go();this.emit('go');return this;};m.prototype.stop=function(){'use strict';for(var n=0,o=this.$ParallelAnimations1.length;n<o;n++)this.$ParallelAnimations1[n].stop.apply(this.$ParallelAnimations1[n],arguments);return this;};m.prototype.duration=function(){'use strict';for(var n=0,o=this.$ParallelAnimations1.length;n<o;n++)this.$ParallelAnimations1[n].duration.apply(this.$ParallelAnimations1[n],arguments);return this;};c('mixInEventEmitter')(k,i);c('mixInEventEmitter')(l,i);c('mixInEventEmitter')(m,i);k.Serial=l;k.Parallel=m;f.exports=k;},null);
__d('DOMClone',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={shallowClone:function(j){return i(j,false);},deepClone:function(j){return i(j,true);}};function i(j,k){var l=j.cloneNode(k);if(typeof l.__FB_TOKEN!=='undefined')delete l.__FB_TOKEN;return l;}f.exports=h;},null);
__d('XUIStepperAnimator',['DOM','DOMClone','StepperAnimation','ArbiterMixin','Style','curry','mixin'],function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();function j(q){if(q.offsetParent)return parseInt(c('Style').get(q,'width'),10);return 0;}var k=500,l=2,m=200,n=300,o=200;h=babelHelpers.inherits(p,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;function p(q){i.constructor.call(this);this.$XUIStepperAnimator1=null;this.setConfig(q);}p.prototype.setConfig=function(q){var r=q.animateMount,s=q.animateTransition,t=q.transitionAnimationDuration;this.$XUIStepperAnimator2=r;this.$XUIStepperAnimator3=s;this.$XUIStepperAnimator4=t;};p.prototype.mountAnimator=function(q){var r=q.steps,s=q.toStep;if(this.$XUIStepperAnimator2){return this.$XUIStepperAnimator5(r,s);}else return this.$XUIStepperAnimator6(r,s);};p.prototype.transitionAnimator=function(q){var r=q.steps,s=q.toStep;this.$XUIStepperAnimator1&&this.$XUIStepperAnimator1.stop();if(this.$XUIStepperAnimator3){this.$XUIStepperAnimator1=this.$XUIStepperAnimator7(r,s,this.$XUIStepperAnimator4);return this.$XUIStepperAnimator1;}else return this.$XUIStepperAnimator6(r,s);};p.prototype.blinkAnimator=function(q){var r=q.steps,s=q.index,t=q.delay,u=r[s].circle,v=[],w=Object.assign({},u.style),x=j(u),y=x*2,z=parseInt(c('Style').get(u,'marginLeft'),10),aa=u.offsetLeft-z,ba=aa-x/2,ca=parseInt(c('Style').get(u,'marginTop'),10),da=u.offsetTop-ca,ea=da-x/2,fa=c('DOMClone').deepClone(u);fa.removeAttribute('data-reactid');c('Style').set(fa,'position','absolute');c('Style').set(fa,'left',aa+'px');c('Style').set(fa,'top',da+'px');c('Style').set(fa,'pointer-events','none');for(var ga=0;ga<l;ga++)v.push(new (c('StepperAnimation'))(fa).from('top',da).to('top',ea).from('left',aa).to('left',ba).from('height',x).to('height',y).from('line-height',x).to('line-height',y).from('width',x).to('width',y).duration(100),new (c('StepperAnimation'))(fa).from('top',ea).to('top',da).from('left',ba).to('left',aa).from('height',y).to('height',x).from('line-height',y).to('line-height',x).from('width',y).to('width',x).duration(150));var ha=new (c('StepperAnimation').Serial)(v);ha.addListener('done',function(){c('DOM').remove(fa);Object.assign(u.style,w);});setTimeout(function(){c('Style').set(u,'visibility','hidden');c('DOM').insertAfter(u,fa);ha.go();},t?k:0);return ha;};p.prototype.$XUIStepperAnimator5=function(q,r){this.$XUIStepperAnimator8(q);this.$XUIStepperAnimator9(q,o);this.$XUIStepperAnimator10(q,r,o);};p.prototype.$XUIStepperAnimator10=function(q,r,s){var t=[],u=this.$XUIStepperAnimator11(q,r),v=u.total,w=s/v;q.forEach(function(x){return [x.leftConnector,x.rightConnector].forEach(function(y,z){if(y.offsetParent){var aa=j(y);c('Style').set(y,'width',0);t.push(this.$XUIStepperAnimator12(aa,y,aa*w));}}.bind(this));}.bind(this));setTimeout(function(){var x=new (c('StepperAnimation').Serial)(t);x.addListener('done',function(){this.transitionAnimator({steps:q,toStep:r});}.bind(this));x.go();}.bind(this),n);};p.prototype.$XUIStepperAnimator8=function(q){q.map(function(r){var s=r.circle,t=j(s),u=parseInt(c('Style').get(s,'marginLeft'),10),v=parseInt(c('Style').get(s,'marginTop'),10),w=parseInt(c('Style').get(s,'opacity'),10),x=Object.assign({},s.style),y=new (c('StepperAnimation'))(r.circle).from('height',t*4).to('height',t).from('width',t*4).to('width',t).from('margin-left',u-t*1.5).to('margin-left',u).from('margin-top',v-t*1.5).to('margin-top',v).from('opacity',0).to('opacity',w||1).duration(m);y.addListener('done',function(){Object.assign(s.style,x);});y.go();});};p.prototype.$XUIStepperAnimator9=function(q,r){var s=q.map(function(t){var u=t.label,v=Object.assign({},u.style),w=parseInt(c('Style').get(u,'marginTop'),10),x=parseInt(c('Style').get(u,'marginBottom'),10);c('Style').set(u,'marginTop',w+11+'px');c('Style').set(u,'marginBottom',x-11+'px');var y=new (c('StepperAnimation'))(u).from('marginTop',w+11).to('marginTop',w).from('marginBottom',x-11).to('marginBottom',x);y.addListener('done',function(){Object.assign(u.style,v);});return y;});new (c('StepperAnimation').Parallel)(s).duration(r).go();};p.prototype.$XUIStepperAnimator7=function(q,r,s){var t=this.$XUIStepperAnimator11(q,r),u=t.currentPosition,v=t.toPosition,w=t.stepPositions,x=Math.abs(v-u),y=s/x;if(v>u){return this.$XUIStepperAnimator13(q,w,u,v,y);}else return this.$XUIStepperAnimator14(q,w,u,v,y);};p.prototype.$XUIStepperAnimator13=function(q,r,s,t,u){var v=[];for(var w=0,x=q.length;w<x;w++){var y=r[w];if(y.middle<=t)if(y.leftBarDistanceToAnimate)v.push(this.$XUIStepperAnimator12(y.middle-y.start,q[w].leftConnectorBar,y.leftBarDistanceToAnimate*u,c('curry')(function(z){this.inform('currentStep',z);}.bind(this),w)));if(y.end<=t)if(y.rightBarDistanceToAnimate)v.push(this.$XUIStepperAnimator12(y.end-y.middle,q[w].rightConnectorBar,y.rightBarDistanceToAnimate*u));}return new (c('StepperAnimation').Serial)(v).go();};p.prototype.$XUIStepperAnimator14=function(q,r,s,t,u){var v=[];for(var w=q.length-1;w>=0;w--){var x=r[w];if(x.middle>=t)v.push(this.$XUIStepperAnimator12(0,q[w].rightConnectorBar,x.rightBarDistanceToAnimate*u,c('curry')(function(y){this.inform('currentStep',y);}.bind(this),w)));if(x.start>=t)v.push(this.$XUIStepperAnimator12(0,q[w].leftConnectorBar,x.leftBarDistanceToAnimate*u));}return new (c('StepperAnimation').Serial)(v).go();};p.prototype.$XUIStepperAnimator12=function(q,r,s,t){var u=new (c('StepperAnimation'))(r);if(q!==0)u.addListener('done',function(){c('Style').set(r,'width','100%');});u.to('width',q).duration(s);if(t)u.addListener('done',t);return u;};p.prototype.$XUIStepperAnimator6=function(q,r){for(var s=0,t=r;s<t;s++){c('Style').set(q[s].leftConnectorBar,'width','100%');c('Style').set(q[s].rightConnectorBar,'width','100%');}c('Style').set(q[r].leftConnectorBar,'width','100%');c('Style').set(q[r].rightConnectorBar,'width','0%');for(var u=r+1,v=q.length;u<v;u++){c('Style').set(q[u].leftConnectorBar,'width','0%');c('Style').set(q[u].rightConnectorBar,'width','0%');}this.inform('currentStep',r);};p.prototype.$XUIStepperAnimator11=function(q,r){var s=0,t=0,u=0,v=[];for(var w=0,x=q.length;w<x;w++){var y=q[w],z=j(y.leftConnector),aa=j(y.leftConnectorBar),ba=j(y.rightConnector),ca=j(y.rightConnectorBar),da=0,ea=0;if(w<r){t+=z;t+=ba;}if(r===w)t+=z;var fa=u;s+=aa;u+=z;var ga=u;s+=ca;u+=ba;var ha=u;if(t>fa){da=z-aa;}else da=aa;if(t>ga){ea=ba-ca;}else ea=ca;v.push({start:fa,middle:ga,end:ha,leftBarDistanceToAnimate:da,rightBarDistanceToAnimate:ea});}return {currentPosition:s,total:u,toPosition:t,stepPositions:v};};f.exports=p;},null);
__d('XUIStepper.react',['cx','fbt','invariant','AbstractStepper.react','React','ReactDOM','XUIStepperAnimator','joinClasses'],function a(b,c,d,e,f,g,h,i,j){'use strict';var k,l,m,n,o,p;if(c.__markCompiled)c.__markCompiled();var q=c('AbstractStepper.react').Step,r=c('React').PropTypes,s={0:i._("1"),1:i._("2"),2:i._("3"),3:i._("4"),4:i._("5"),5:i._("6"),6:i._("7"),7:i._("8"),8:i._("9")};k=babelHelpers.inherits(t,c('React').PureComponent);l=k&&k.prototype;function t(w){l.constructor.call(this,w);u.call(this);var x=w.animator;if(!x)x=new (c('XUIStepperAnimator'))({animateMount:false,animateTransition:w.animated,transitionAnimationDuration:100});this.state={animator:x,animationStep:0};}t.prototype.componentWillMount=function(){this.$XUIStepper1(this.state.animator);};t.prototype.componentWillUnmount=function(){this.$XUIStepper2(this.state.animator);};t.prototype.componentWillUpdate=function(w){if(w.animator!==this.props.animator)this.setState({animator:w.animator});if(!w.animated&&this.props.animated)this.setState({animator:new (c('XUIStepperAnimator'))({animateMount:false,animateTransition:false})});if(!this.props.animated&&w.animated){var x=this.props.animator;if(!x)x=new (c('XUIStepperAnimator'))({animateMount:false,animateTransition:true});this.setState({animator:x});}};t.prototype.componentDidUpdate=function(w,x){var y=w.currentStep,z=this.props.currentStep,aa=this.state.animator;if(x.animator!==this.state.animator){this.$XUIStepper2(x.animator);this.$XUIStepper1(aa);}if(y!==z&&aa)aa.transitionAnimator(babelHelpers['extends']({},this.$XUIStepper4(),{toStep:z}));};t.prototype.componentDidMount=function(){if(this.state.animator)this.state.animator.mountAnimator(babelHelpers['extends']({},this.$XUIStepper4(),{toStep:this.props.currentStep}));};t.prototype.render=function(){var w=this.props,x=w.className,y=babelHelpers.objectWithoutProperties(w,['className']);x=c('joinClasses')(x,"_38st"+(y.numbered?' '+"_38su":'')+(y.animated?' '+"_38sv":'')+(y.size==='small'?' '+"_38sw":'')+(y.size==='medium'?' '+"_38sx":'')+(y.size==='large'?' '+"_38sy":'')+(y.size==='xlarge'?' '+"_38sz":''));return (c('React').createElement(c('AbstractStepper.react'),babelHelpers['extends']({ref:'Stepper'},y,{currentStep:this.state.animationStep,className:x})));};t.propTypes=babelHelpers['extends']({},c('AbstractStepper.react').propTypes,{animated:r.bool,animator:r.shape({mountAnimator:r.func,transitionAnimator:r.func,blinkAnimator:r.func}),numbered:r.bool,checked:r.bool,size:r.oneOf(['small','medium','large','xlarge'])});t.defaultProps={animated:true,animator:null,numbered:false,currentStep:0,checked:false,size:'medium'};var u=function(){this.$XUIStepper2=function(w){w.unsubscribe(this.$XUIStepper3);this.$XUIStepper3=null;}.bind(this);this.$XUIStepper1=function(w){this.$XUIStepper3=w.subscribe('currentStep',function(x,y){this.setState({animationStep:y});}.bind(this));}.bind(this);this.blinkDot=function(w){if(!this.$XUIStepper5){this.$XUIStepper5=this.state.animator.blinkAnimator(babelHelpers['extends']({},this.$XUIStepper4(),{index:w,delay:w!==this.props.currentStep}));this.$XUIStepper5.addListener('done',function(){this.$XUIStepper5=null;}.bind(this));}}.bind(this);this.$XUIStepper4=function(){var w=c('React').Children.count(this.props.children),x=[];for(var y=0,z=w;y<z;y++)x.push(this.refs.Stepper.refs[y]);return {steps:x.map(function(aa){return {circle:c('ReactDOM').findDOMNode(aa.refs.circle),label:c('ReactDOM').findDOMNode(aa.refs.label),leftConnector:c('ReactDOM').findDOMNode(aa.refs.leftConnector.refs.bgBar),leftConnectorBar:c('ReactDOM').findDOMNode(aa.refs.leftConnector.refs.fgBar),rightConnector:c('ReactDOM').findDOMNode(aa.refs.rightConnector.refs.bgBar),rightConnectorBar:c('ReactDOM').findDOMNode(aa.refs.rightConnector.refs.fgBar)};})};}.bind(this);};t.Step=(n=m=function(){var w,x;w=babelHelpers.inherits(y,c('React').PureComponent);x=w&&w.prototype;y.prototype.render=function(){'use strict';var z=this.props,aa=z.children,ba=z.className,ca=babelHelpers.objectWithoutProperties(z,['children','className']);!(ca.totalSteps<10)?j(0):void 0;ba=c('joinClasses')(ba,"_38s-");var da=ca.index===ca.totalSteps-1,ea=ca.index===0,fa=false,ga=false,ha=void 0;if(ca.checked&&(ca.index<ca.currentStep||ca.alwaysChecked)){ha=c('React').createElement('div',{className:"_38s_"});}else ha=ca.numbered?s[ca.index]:'';return (c('React').createElement(q,babelHelpers['extends']({},ca,{className:ba}),c('React').createElement(v,{ref:'leftConnector',on:ga,side:'right',className:"_38t1"+(ea?' '+"hidden_elem":'')}),c('React').createElement(v,{ref:'rightConnector',on:fa,side:'left',className:"_38t2"+(da?' '+"hidden_elem":'')}),c('React').createElement('div',{className:"_38t3"},c('React').createElement('div',{className:"_38t4"},c('React').createElement('span',{className:"_38t5"+(ca.index<=ca.currentStep?' '+"_38t6":''),ref:'circle'},c('React').createElement('div',{className:"_38t7"}),c('React').createElement('div',{className:"_38t8"}),c('React').createElement('div',{className:"_38t9"}),c('React').createElement('span',{className:"_38ta",ref:'circleContent'},ha)))),c('React').createElement('div',{ref:'label',className:"_jkl"},aa)));};function y(){'use strict';w.apply(this,arguments);}return y;}(),m.propTypes={currentStep:r.number,index:r.number,numbered:r.bool,checked:r.bool,alwaysChecked:r.bool},n);o=babelHelpers.inherits(v,c('React').PureComponent);p=o&&o.prototype;v.prototype.render=function(){var w=this.props,x=w.className,y=babelHelpers.objectWithoutProperties(w,['className']);x=c('joinClasses')(x,"_38tb");var z=c('React').createElement('div',{className:"_38tc"+(y.side==='left'?' '+"_38td":'')+(y.side==='right'?' '+"_38te":'')});return (c('React').createElement('div',{className:x},c('React').createElement('div',{className:"_38tl"},c('React').createElement('div',{className:"_38tg",ref:'bgBar'},z,c('React').createElement('div',{className:"_38ti"},c('React').createElement('div',{className:"_38tj"}),c('React').createElement('div',{className:"_38tk"}))),c('React').createElement('div',{className:"_38tf _38tg _38th",ref:'fgBar'},z,c('React').createElement('div',{className:"_38ti"},c('React').createElement('div',{className:"_38tj"}),c('React').createElement('div',{className:"_38tk"}))))));};function v(){o.apply(this,arguments);}v.propTypes={side:r.oneOf(['left','right'])};f.exports=t;},null);
__d('DeveloperAppReviewStatus',['AsyncRequest','DOM','Event'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={registerDevModeToggle:function(i,j){c('Event').listen(i,'change',function(k){k.getTarget().disabled=true;new (c('AsyncRequest'))(j).setMethod("POST").setData({is_live:k.target.checked}).setServerDialogCancelHandler(function(){var l=c('DOM').find(i,'input');l.disabled=false;l.checked=!l.checked;}).send();});}};f.exports=h;},null);
__d('DeveloperAppSwitchButton',['DOMEventListener','emptyFunction'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';this.$DeveloperAppSwitchButton1=i.checked;this.$DeveloperAppSwitchButton2=c('emptyFunction');c('DOMEventListener').add(i,'change',function(j){this.$DeveloperAppSwitchButton1=i.checked;this.$DeveloperAppSwitchButton2(this);}.bind(this));}h.prototype.setOnChange=function(i){'use strict';this.$DeveloperAppSwitchButton2=i;};h.prototype.isChecked=function(){'use strict';return this.$DeveloperAppSwitchButton1;};f.exports=h;},null);
__d('DevsiteAppDashNavProductItem',['CSS'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(i,j,k,l,m){this.$DevsiteAppDashNavProductItem1=i;this.$DevsiteAppDashNavProductItem2=j;this.$DevsiteAppDashNavProductItem3=k;this.$DevsiteAppDashNavProductItem4=l;this.$DevsiteAppDashNavProductItem5=m;}h.prototype.getRoute=function(){return this.$DevsiteAppDashNavProductItem1;};h.prototype.getRoot=function(){return this.$DevsiteAppDashNavProductItem2;};h.prototype.getLink=function(){return this.$DevsiteAppDashNavProductItem3;};h.prototype.getSubProducts=function(){return this.$DevsiteAppDashNavProductItem5;};h.prototype.showSpinner=function(i){c('CSS').conditionShow(this.$DevsiteAppDashNavProductItem4,i);};h.prototype.setIsSelected=function(i){c('CSS').conditionClass(this.getRoot(),'selected',i);};f.exports=h;},null);
__d('DevsiteAppDashNavSubProductItem',['CSS'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(i,j,k){this.$DevsiteAppDashNavSubProductItem1=i;this.$DevsiteAppDashNavSubProductItem2=j;this.$DevsiteAppDashNavSubProductItem3=k;}h.prototype.getTab=function(){return this.$DevsiteAppDashNavSubProductItem1;};h.prototype.getRoot=function(){return this.$DevsiteAppDashNavSubProductItem2;};h.prototype.getIsDefault=function(){return this.$DevsiteAppDashNavSubProductItem3;};h.prototype.setIsSelected=function(i){c('CSS').conditionClass(this.getRoot(),'selected',i);};f.exports=h;},null);
__d('DashboardHeaderToggle',['cx','CSS','Event'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();function i(j,k,l){c('Event').listen(j,'click',this.$DashboardHeaderToggle1.bind(this,j,k,l));}i.prototype.$DashboardHeaderToggle1=function(j,k,l){c('CSS').toggle(k);c('CSS').toggle(l);c('CSS').toggleClass(j,"_2xo5");};f.exports=i;},null);
__d('ServerRedirect',['ReloadPage','goURI'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={redirectPageTo:c('goURI'),reloadPage:c('ReloadPage').now};f.exports=h;},null);
__d("XDeveloperAdNetworkHideOnboardingNuxAsyncController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/apps\/{app_id}\/async\/onboarding\/nux\/hide\/",{app_id:{type:"Int",required:true}});},null);
__d('AdNetworkOnboardingNux',['cx','fbt','AdsMessageBox.react','AsyncRequest','BUIText.react','CenteredContainer.react','DevsiteCard.react','DevsiteCardSection.react','DOMContainer.react','LeftRight.react','Link.react','React','ReactDOM','ServerRedirect','XUIStepper.react','XUIStepperAnimator','XUIText.react','getElementPosition','XDeveloperAdNetworkHideOnboardingNuxAsyncController'],function a(b,c,d,e,f,g,h,i){'use strict';var j,k;if(c.__markCompiled)c.__markCompiled();var l=c('XUIStepper.react').Step,m=c('React').PropTypes;j=babelHelpers.inherits(n,c('React').Component);k=j&&j.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return o=(p=k.constructor).call.apply(p,[this].concat(r)),this.state={hoveredStepIndex:null,isChecked:true,isNumbered:true,isVisible:true,rootPosition:null,size:'medium'},this.$AdNetworkOnboardingNux2=function(){var t=c('XDeveloperAdNetworkHideOnboardingNuxAsyncController').getURIBuilder().setInt('app_id',this.props.appID).getURI();new (c('AsyncRequest'))(t).setMethod('POST').setHandler(function(u){if(u.payload.success)this.setState({isVisible:false});}.bind(this)).send();}.bind(this),this.onStepSelected=function(t){var u=this.props.steps[t],v=u.action.actionType;if(v==null)return;var w=u.action.actionUri;if(v==='dialog'){new (c('AsyncRequest'))(w).send();}else if(v==='redirect')c('ServerRedirect').redirectPageTo(w);}.bind(this),this.onStepHovered=function(t){this.setState({hoveredStepIndex:t});}.bind(this),this.$AdNetworkOnboardingNux3=function(){if(!this.state.rootPosition)return null;var t=this.state.rootPosition.width,u=this.props.steps.length,v=this.state.hoveredStepIndex+1,w=30,x=20,y={marginLeft:t/u*(v-.5)-w/2-x};return (c('React').createElement('div',{className:"_18_4",style:y},c('React').createElement('div',{className:"_3vql"}),c('React').createElement('div',{className:"_18_5"})));}.bind(this),o;}n.init=function(o,p){c('ReactDOM').render(c('React').createElement(n,p),o);};n.prototype.componentDidMount=function(){this.setState({rootPosition:c('getElementPosition')(c('ReactDOM').findDOMNode(this.refs.progressBar))});};n.prototype.componentWillMount=function(){this.$AdNetworkOnboardingNux1=new (c('XUIStepperAnimator'))({animateMount:true,animateTransition:true,transitionAnimationDuration:100});};n.prototype.render=function(){if(!this.state.isVisible)return c('React').createElement('div',null);var o=0,p=this.props.steps.length;for(var q=0;q<p;++q){if(this.props.steps[q].isCompleted)continue;o=q;break;}var r=parseInt(Number(this.state.hoveredStepIndex),10)===this.state.hoveredStepIndex?this.state.hoveredStepIndex:o,s=this.props.steps[r];if(s==null)return c('React').createElement('div',null);var t=this.props.steps.map(function(v,w){var x=c('React').createElement(l,{key:v.title,alwaysChecked:v.isCompleted&&v.preCheckEnabled},c('React').createElement('div',{className:o===w?"_18_3":''},c('React').createElement(c('XUIText.react'),{size:'medium'},v.title)));return x;}),u=c('React').createElement('frag',null);if(this.props.steps.length===o+1)u=c('React').createElement(c('LeftRight.react'),null,c('React').createElement('div',null),c('React').createElement(c('Link.react'),{onClick:this.$AdNetworkOnboardingNux2},c('React').createElement(c('XUIText.react'),{display:'block',size:'small'},'Don',"'",'t show this again')));return c('React').createElement(c('DevsiteCard.react'),null,c('React').createElement(c('DevsiteCardSection.react'),null,u,c('React').createElement(c('CenteredContainer.react'),{className:"_3-97",vertical:false},c('React').createElement(c('BUIText.react'),{display:'block',size:'xxlarge',weight:'bold'},i._("Quick Start for Audience Network"))),c('React').createElement(c('XUIStepper.react'),{ref:"progressBar",animator:this.$AdNetworkOnboardingNux1,currentStep:o,onStepSelected:this.onStepSelected,onStepHovered:this.onStepHovered,numbered:this.state.isNumbered,checked:this.state.isChecked,size:this.state.size},t),c('React').createElement('div',{className:"_3-95 _3-8v"},this.$AdNetworkOnboardingNux3(),c('React').createElement(c('AdsMessageBox.react'),{backgroundColor:'white',border:'thick',shadow:false},c('React').createElement(c('XUIText.react'),{className:"_3-94",display:'block',size:'medium',weight:'bold'},s.title),c('React').createElement('div',{className:"_5qox"},c('React').createElement(c('DOMContainer.react'),null,s.description))))));};n.payoutSubtypeAdNetwork='ADN';n.propTypes={appID:m.number.isRequired,steps:m.arrayOf(m.shape({title:m.string.isRequired,description:m.object.isRequired,action:m.shape({actionType:m.oneOf(['dialog','redirect']).isRequired,actionUri:m.string.isRequired}),isCompleted:m.bool.isRequired,preCheckEnabled:m.bool.isRequired})).isRequired};f.exports=n;},null);
__d('DevsiteButtonTextField.react',['cx','fbt','AsyncRequest','React','URI','XUIButton.react'],function a(b,c,d,e,f,g,h,i){var j,k;if(c.__markCompiled)c.__markCompiled();var l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;function m(){var n,o;'use strict';for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return n=(o=k.constructor).call.apply(o,[this].concat(q)),this.state={value:this.props.value,buttonHidden:this.props.buttonHidden,buttonLabel:this.props.buttonLabel,action:this.props.action,actionType:this.props.actionType,disabled:false},this.$DevsiteButtonTextField1=function(event){if(this.state.action){if(this.state.actionType=='link'){new (c('URI'))(this.state.action).go(true);}else new (c('AsyncRequest'))(this.state.action).setMethod('POST').setHandler(function(s){var t=true;if(s.payload.buttonHidden!=='undefined')t=s.payload.buttonHidden;var u=this.state.action;if(s.payload.action!=='undefined')u=s.payload.action;this.setState({buttonLabel:s.payload.buttonLabel,buttonHidden:t,value:s.payload.value,action:u});}.bind(this)).send();this.setState({disabled:this.props.disableOnClick});}return event.preventDefault();}.bind(this),n;}m.prototype.render=function(){'use strict';var n=this.state.value,o=null;if(!this.state.buttonHidden)o=c('React').createElement(c('XUIButton.react'),{type:'button',label:this.state.buttonLabel,onClick:this.props.onClick||this.$DevsiteButtonTextField1,disabled:this.state.disabled});return (c('React').createElement('div',{className:"_5e_6 _5rvc"},c('React').createElement('span',{className:"_5rv9"},n),o));};m.propTypes={value:l.string,buttonHidden:l.bool,buttonLabel:l.string,action:l.string,actionType:l.oneOf(['async','link']),disableOnClick:l.bool};m.defaultProps={buttonHidden:false,buttonLabel:i._("Show")};f.exports=m;},null);