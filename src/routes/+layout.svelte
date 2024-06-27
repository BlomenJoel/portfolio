<script lang="ts">
	import Cursor from '$lib/components/cursor/Cursor.svelte';
	import Menu from '$lib/components/menu.svelte';
	import '../app.css';
</script>

<Cursor />

<div class="flex">
	<div class="w-full flex flex-col">
		<slot />
	</div>
	<Menu />
	<script type="text/javascript">
		window._mfq = window._mfq || [];
		(function () {
			var mf = document.createElement('script');
			mf.type = 'text/javascript';
			mf.defer = true;
			mf.src = '//cdn.mouseflow.com/projects/3db6816d-61a0-48ba-ae4b-240164f61c57.js';
			document.getElementsByTagName('head')[0].appendChild(mf);
		})();
	</script>
	<script type='text/javascript'>
		window.smartlook||(function(d) {
		  var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
		  var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
		  c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
		  })(document);
		  smartlook('init', 'd9b3ce86998c1eb828e2c1adf10af0f143aaad38', { region: 'eu' });
	  </script>
	  <!-- LiveSession.io code -->
	  <script type="text/javascript">
		window['__ls_namespace'] = '__ls';
		window['__ls_script_url'] = 'https://cdn.livesession.io/track.js';
		!function(w, d, t, u, n) {
			  if (n in w) {if(w.console && w.console.log) { w.console.log('LiveSession namespace conflict. Please set window["__ls_namespace"].');} return;}
			  if (w[n]) return; var f = w[n] = function() { f.push ? f.push.apply(f, arguments) : f.store.push(arguments)};
			  if (!w[n]) w[n] = f; f.store = []; f.v = "1.1";
	  
			  var ls = d.createElement(t); ls.async = true; ls.src = u;
			  var s = d.getElementsByTagName(t)[0]; s.parentNode.insertBefore(ls, s);
		  }(window, document, 'script', window['__ls_script_url'], window['__ls_namespace']);
	  
		  __ls("init", "eab33b76.e36b725c", { keystrokes: false });
		  __ls("newPageView");
		</script>
		<!-- END LiveSession.io code -->

		<script>
			!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys getNextSurveyStep onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
			posthog.init('phc_Eu5q6ceee7Jgrii3IjrNM0c6fsvD6P1qUvumrlT92eH',{api_host:'https://us.i.posthog.com', person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
				})
		</script>
</div>
