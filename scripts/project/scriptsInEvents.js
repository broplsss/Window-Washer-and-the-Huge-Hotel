


const scriptsInEvents = {

		async Ecommon_Event4_Act1(runtime, localVars)
		{
			function $(){ return document.querySelector.apply(document,arguments);
			}
			var canvas = $('canvas'),
			 keysDown = []; // You can also define this as an object, {}
			canvas.tabIndex = 0;
			canvas.onclick = function(e){
			 document.body.scrollTop = canvas.offsetTop; // scrolls to canvas element
			 canvas.focus(); // re-focuses canvas in case the scroll unfocused it
			}
			canvas.onkeydown = canvas.onkeyup = function(e){
			 keysDown[e.keyCode] = e.type == 'keydown';
			 e.preventDefault();
			 return false;
			}
			function isDown(key){
			 return keysDown[key];
			}
			function resetMap(){
			 keysDown = [];
			 return false;
			}
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

