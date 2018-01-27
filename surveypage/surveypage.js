//     this.vars = {
//       adWidth: args.ad.offsetWidth,
//       strongly_agree: args.ad.querySelector('#hack_strongly_agree'),
//       agree: args.ad.querySelector('#hack_agree'),
//       neither_agree_nor_disagree: args.ad.querySelector('#hack_neither_agree_nor_disagree'),
//       disagree: args.ad.querySelector('#hack_disagree'),
//       strongly_disagree: args.ad.querySelector('#hack_strongly_disagree'),
//       close: 'hack_close',
//       yes: 'hack_check',
//       no: 'hack_x'
//     };
//   },
//   onClick: function(args) {
//     var id = args.ID;
//     var $ = this.vars;
//     var exitOptions = function(s) {
//       args.ad.style.transition = s/1000 + 's all ease';
//       args.ad.style.opacity = 0;
//       setTimeout(function(){
//         hack.engine.exit();
//       },s);
//     };
//     if(id == $.strongly_agree.id) {
//       args.ad.classList.add("hack_popup-green");
//       setTimeout(function(){
//         exitOptions(1000);
//       },500);
//     } else if(id == $.agree.id) {
//       args.ad.classList.add("hack_popup-green");
//       setTimeout(function(){
//         exitOptions(1000);
//       },500);
//     } else if(id == $.neither_agree_nor_disagree.id) {
//       args.ad.classList.add("hack_popup-green");
//       setTimeout(function(){
//         exitOptions(1000);
//       },500);
//     } else if(id == $.disagree.id) {
//       args.ad.classList.add("hack_popup-green");
//       setTimeout(function(){
//         exitOptions(1000);
//       },500);
//     } else if(id == $.strongly_disagree.id) {
//       args.ad.classList.add("hack_popup-green");
//       setTimeout(function(){
//         exitOptions(1000);
//       },500);
//     } else if(id == $.close) {
//       exitOptions(300);
//     }
//   }
// };
