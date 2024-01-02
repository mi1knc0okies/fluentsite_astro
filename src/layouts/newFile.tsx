import Navbar from '../components/Navbar.astro';
import Footer from '../components/Footer.astro';
import { Astro } from "./Layout.astro";

<Fragment>
<html class="scroll-smooth" lang="en">
<head>
<meta charset="UTF-8" />
<meta name="description" content="Astro description" />
<meta name="viewport" content="width=device-width" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<meta name="generator" content={Astro.generator} />
<title>{title}</title>
</head>

<body>
<div><Navbar /></div>
<div><slot /></div>
<div><scrollProgress div {...{ "<": true }}>
<div><Footer /></div>
</scrollProgress>

</div>

</body></html>
</Fragment>;
