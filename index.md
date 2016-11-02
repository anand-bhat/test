---
layout: blank
title: HTTPS Watch
---
<div>
	<h1>{{ page.title }} {% if page.tagline %} - {{ page.tagline }}{% endif %}</h1>
</div>
<div>
This project aims to determine and improve the TLS configurations of HTTPS servers. While it isn't possible to list every site on the internet, sites for certain categories where good security is expected are added in the project's scope. This uses the <a  target="_blank" href="https://github.com/ssllabs/ssllabs-scan/blob/stable/ssllabs-api-docs.md">API</a> from <a  target="_blank" href="https://www.ssllabs.com/ssltest/index.html">Qualys SSL Labs Server Test</a> to evaluate a site's TLS configuration and displays its grade. Issues with a site's TLS configuration that prevent it from obtaining an 'A' grade or better are highlighted.
<div>