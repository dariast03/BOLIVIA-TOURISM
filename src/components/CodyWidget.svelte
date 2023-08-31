<script>
    import { onMount } from 'svelte';

    onMount(() => {
        window.codySettings = { widget_id: '9a0659e0-b8b3-4b77-95e8-8297ee51614d' };

        (function() {
            var t = window, e = document, a = function() {
                var t = e.createElement("script");
                t.type = "text/javascript", t.async = !0, t.src = "https://trinketsofcody.com/cody-widget.js";
                var a = e.getElementsByTagName("script")[0];
                a.parentNode.insertBefore(t, a);
            };
            if ("complete" === document.readyState) {
                a();
            } else if (t.attachEvent) {
                t.attachEvent("onload", a);
            } else {
                t.addEventListener("load", a, !1);
            }
        })();
    });
</script>

<div id="cody-widget-container"></div>
