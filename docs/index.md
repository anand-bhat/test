---
layout: blank
title: HTTPS Watch
---
<div>
	<h2>{{ site.title }}</h2>
</div>
<hr>
<div>
	This project aims to create an actionable dashboard listing the TLS configurations of certain websites where good transport layer security is expected.
	This uses the <a href="https://www.ssllabs.com/ssltest/index.html">Qualys SSL Labs Server Test</a> to evaluate a site's TLS configuration and displays its grade. Issues with a site's TLS configuration that prevent it from obtaining an 'A' grade or better are highlighted. The full report is also available via a hyperlink to the Qualys site.
</div>
<div>
	At this time, the focus is on websites used by services in India. In my opinion, most internet users in India do not understand or underestimate the importance of online privacy and security and this is reflected
	in the sorry state of HTTPS adoption and deployment across the board, especially for government agencies. While my request to mandate the use of HTTPS hasn't been acknowledged by the agency responsible for
	maintaining government websites, my hope is that with enough exposure they will do something similar to what has been done by <a href="https://https.cio.gov/">the USA for Federal websites</a> and
	<a href="https://www.ncsc.gov.uk/guidance/tls-external-facing-services">the UK</a>.
</div>
<div>
	Most people associate HTTPS with things that need to be kept private, like login information or a page that accepts credit cards but it is becoming increasingly clear that all web properties need to use HTTPS to ensure a safe, secure and intrusion-free web experience. An excellent write-up for "HTTPS Everywhere" can be found at the aforementioned <a href="https://https.cio.gov/everything/">US Federal Government's HTTPS-Only standard site</a>.
</div>
<div>
	The reason for including subdomains not normally used by the general public is that these are typically not maintained at the same standard as the main domain. Some of these (such as vpn.domain.com, 
	webmail.domain.com etc.) are used by employees to access internal resources and it is imperative that these be protected at the same level, if not better, than a site that is used by the general public.
	Having such a site have poor security may lead to the an employee's credentials being compromised which could give an attacker access to internal systems. Then there are subdomains that continue to be vulnerable
	to serious veulnerabilies such as <a href="https://en.wikipedia.org/wiki/Heartbleed">Heartbleed</a> that can be a great asset to attackers.
</div>
<hr>
<div>
	<h4>Categories:</h4>
	<ul>
		<li><a href="./reports/indianPharmacies">Indian Pharmacies</a> - Online pharmacies in India</li>
		<li><a href="./reports/indianIncomeTaxFilingServices">Indian Income Tax Filing Services</a> - Income Tax Filing Services in India</li>
	</ul>
</div>