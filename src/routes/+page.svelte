<script lang="ts">
	type LinkItem = { label: string; href: string };
	type ExperienceItem = {
		title: string;
		company: string;
		companyHref?: string;
		period: string;
		description: string;
		roles: string[];
		projects: LinkItem[];
	};
	type ProjectItem = {
		id: string;
		title: string;
		year: number;
		summary: string;
		bullets: string[];
		skills: string[];
		links?: LinkItem[];
	};
	type CourseItem = {
		title: string;
		provider: string;
		note: string;
		links: LinkItem[];
	};
	type SkillGroup = { title: string; items: { label: string; level: string }[] };

	const navItems = [
		{ label: 'About', href: '#about' },
		{ label: 'Experience', href: '#experience' },
		{ label: 'Projects', href: '#projects' },
		{ label: 'Skills', href: '#skills' }
	];

	const proofItems = ['Web systems.', 'Workflow automation.', 'API integrations.'];

	const experience: ExperienceItem[] = [
		{
			title: 'Full-stack Developer',
			company: 'ROSH Tecnologia',
			companyHref: 'https://roshtecnologia.com.br/',
			period: '03/2026 - 05/2026',
			description:
				'Developed business websites and web systems spanning requirements analysis, front-end implementation, back-end logic, deployment, and WordPress delivery.',
			roles: [
				'Full-stack Developer',
				'Front-end Developer',
				'Systems Analyst',
				'Deployment Specialist',
				'WordPress Developer'
			],
			projects: [
				{ label: 'Connecta Moveis', href: '#connecta-moveis-website' },
				{ label: 'Traje Fino', href: '#traje-fino-website' },
				{ label: 'Track Day Landing Page', href: '#track-day-wordpress' }
			]
		},
		{
			title: 'n8n Developer',
			company: 'Woont.co',
			companyHref: 'https://www.instagram.com/woont.co/',
			period: '12/2025 - 02/2026',
			description:
				'Built automation and conversational systems with n8n, AI services, APIs, and WhatsApp-based workflows for legal and real estate operational use cases.',
			roles: [
				'Workflow Automation Developer',
				'AI Automation Developer',
				'Chatbot Developer',
				'API Integration Specialist'
			],
			projects: [
				{ label: 'Legal Automation', href: '#legal-automation' },
				{ label: 'Real Estate Multi-Agent System', href: '#real-estate-multi-agent' }
			]
		},
		{
			title: 'Personal Projects & Technical Learning',
			company: 'Personal Initiatives and Projects',
			companyHref: 'https://github.com/fpvilela',
			period: '10/2024 - Present',
			description:
				'Developed personal projects focused on full-stack development, automation, integrations, and technical communication while expanding practical experience across products and learning initiatives.',
			roles: [
				'Full-stack Developer',
				'Front-end Developer',
				'Workflow Automation Developer',
				'API Integration Specialist'
			],
			projects: [
				{ label: 'Communit Hub', href: '#communit-hub' },
				{
					label: 'Alerts to WhatsApp Automation',
					href: '#google-alerts-whatsapp-content-automation'
				},
				{ label: 'YouTube Programming Channel', href: '#youtube-channel' }
			]
		},
		{
			title: 'Back-end Developer',
			company: 'Seu Visto Certo',
			companyHref: 'https://seuvistocerto.com/',
			period: '12/2023 - 11/2025',
			description:
				'Developed backend automations, document processing workflows, CRM support routines, and technical documentation to improve legal and sales operations.',
			roles: [
				'Back-end Developer',
				'Workflow Automation Developer',
				'API Integration Specialist',
				'Document Automation Developer',
				'CRM Administrator',
				'Sales Operations Specialist',
				'CRM Trainer',
				'Technical Documentation Specialist'
			],
			projects: [
				{ label: 'OneDrive PDF Extractor', href: '#onedrive-pdf-data-extractor' },
				{ label: 'Sales Info System', href: '#sales-information-management-system' },
				{ label: 'Lead-to-Deal System', href: '#lead-to-deal-automation' },
				{ label: 'Pipedrive CRM Docs', href: '#pipedrive-crm-learning-documentation' }
			]
		},
		{
			title: 'Front-end Developer',
			company: 'Vzion Corporation',
			companyHref: 'https://www.instagram.com/vzion.corp/',
			period: '01/2023 - 06/2023',
			description:
				'Implemented responsive front-end interfaces for a real estate web platform, covering property browsing and core user-facing pages.',
			roles: ['Front-end Developer'],
			projects: [{ label: 'Vilela Properties', href: '#vilela-properties' }]
		}
	];

	const featuredProjects: ProjectItem[] = [
		{
			id: 'connecta-moveis-website',
			title: 'Connecta Moveis',
			year: 2026,
			summary:
				'Developed an end-to-end web system for a corporate furniture catalog, including an administrative panel, product management workflows, and deployment to a production hosting environment.',
			bullets: [
				'Gathered requirements, organized use cases, and used them to guide implementation decisions.',
				'Built authentication, access control, CRUD flows, and image handling with PHP, HTML, CSS, and MySQL.',
				'Structured Docker-based local development and handled production deployment through SSH and GitHub.'
			],
			skills: ['PHP', 'MySQL / MariaDB', 'Docker', 'RBAC', 'Deployment', 'Technical Documentation']
		},
		{
			id: 'real-estate-multi-agent',
			title: 'Real Estate Multi-Agent System',
			year: 2026,
			summary:
				'Developed a multi-agent WhatsApp support system for a real estate company, routing conversations between specialized AI assistants for commercial, legal, and financial service.',
			bullets: [
				'Designed three specialized assistants coordinated by a central routing agent.',
				'Connected the commercial flow to Superlogica and linked legal and financial flows to client databases.',
				'Built a shared support workflow that adapted responses according to conversation context and business area.'
			],
			skills: ['n8n', 'OpenAI API', 'WhatsApp API', 'Workflow Automation', 'API Integration', 'Webhooks']
		},
		{
			id: 'legal-automation',
			title: 'Legal Automation',
			year: 2025,
			summary:
				'Developed a legal automation system that transformed case updates into humanized communications with clients, automated reminders and billing notifications, and supported WhatsApp chatbot workflows.',
			bullets: [
				'Built n8n workflows connecting Google Sheets, Supabase, OpenAI, and WhatsApp via Z-API.',
				'Implemented case-progress classification and context-aware message generation for operational actions.',
				'Structured Supabase and PostgreSQL storage for workflow state, history, and process control.'
			],
			skills: ['n8n', 'Supabase', 'PostgreSQL', 'OpenAI API', 'Automation', 'Chatbot Development']
		},
		{
			id: 'communit-hub',
			title: 'Communit Hub',
			year: 2026,
			summary:
				'Contributed to a centralized communication and operations platform for managing WhatsApp, email, and internal workflows from a single panel.',
			bullets: [
				'Implemented Supabase authentication flows, protected routes, and user profile setup.',
				'Applied Row Level Security policies for controlled access to operational data.',
				'Built key parts of the email module, including IMAP and SMTP configuration, message views, and attachment handling.'
			],
			skills: ['TypeScript', 'React', 'Node.js', 'Express', 'Supabase', 'Authentication']
		}
	];

	const education = [
		{
			year: '2021',
			institution:
				'Planalto University Center of the Federal District (Centro Universitario Planalto do Distrito Federal - UNIPLAN)',
			institutionHref: 'https://www.uniplandf.edu.br/',
			degree: "Bachelor's in Systems Analysis and Development",
			note: 'Formal background in systems analysis, development, and implementation fundamentals.',
			location: 'Brasilia, DF, Brazil'
		}
	];

	const courses: CourseItem[] = [
		{
			title: 'CSS - The Complete Guide',
			provider: 'Udemy',
			note: 'Completed all coursework credits.',
			links: [
				{
					label: 'Official website',
					href: 'https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass'
				},
				{ label: 'Tracking repository', href: 'https://github.com/fpvilela/css-complete-guide' }
			]
		},
		{
			title: 'JavaScript - The Complete Guide (Beginner + Advanced)',
			provider: 'Udemy',
			note: 'Completed all coursework credits.',
			links: [
				{
					label: 'Official website',
					href: 'https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced'
				},
				{ label: 'Tracking repository', href: 'https://github.com/fpvilela/js-complete-guide' }
			]
		},
		{
			title: 'Svelte Tutorial',
			provider: 'Svelte',
			note: 'Completed.',
			links: [
				{ label: 'Tutorial website', href: 'https://svelte.dev/tutorial/svelte/welcome-to-svelte' },
				{ label: 'Tracking repository', href: 'https://github.com/fpvilela/svelte-tutorial' }
			]
		}
	];

	const skillLegend = [
		{ marker: '○', label: 'Beginner' },
		{ marker: '●', label: 'Experienced' },
		{ marker: '◆', label: 'Advanced' },
		{ marker: '■', label: 'Expert' }
	];

	const skillGroups: SkillGroup[] = [
		{
			title: 'Development',
			items: [
				{ label: 'HTML', level: '●' },
				{ label: 'CSS', level: '●' },
				{ label: 'JavaScript', level: '●' },
				{ label: 'TypeScript', level: '●' },
				{ label: 'PHP', level: '●' },
				{ label: 'Python', level: '●' },
				{ label: 'React', level: '●' }
			]
		},
		{
			title: 'Data and Platforms',
			items: [
				{ label: 'MySQL / MariaDB', level: '●' },
				{ label: 'PostgreSQL', level: '●' },
				{ label: 'Supabase', level: '◆' },
				{ label: 'Node.js', level: '●' },
				{ label: 'Express', level: '●' },
				{ label: 'WordPress', level: '●' }
			]
		},
		{
			title: 'Automation and AI',
			items: [
				{ label: 'n8n', level: '◆' },
				{ label: 'Workflow Automation', level: '◆' },
				{ label: 'Process Automation', level: '◆' },
				{ label: 'Artificial Intelligence', level: '◆' },
				{ label: 'OpenAI API', level: '◆' },
				{ label: 'Chatbot Development', level: '●' }
			]
		},
		{
			title: 'Integrations and Delivery',
			items: [
				{ label: 'API Integration', level: '◆' },
				{ label: 'Webhooks', level: '●' },
				{ label: 'OAuth', level: '●' },
				{ label: 'Docker', level: '●' },
				{ label: 'Deployment', level: '◆' },
				{ label: 'SSH', level: '◆' },
				{ label: 'Git', level: '■' },
				{ label: 'GitHub', level: '■' }
			]
		},
		{
			title: 'Applied Practice',
			items: [
				{ label: 'Authentication', level: '●' },
				{ label: 'Requirements Analysis', level: '●' },
				{ label: 'UI Development', level: '◆' },
				{ label: 'Web Design', level: '◆' },
				{ label: 'Technical Documentation', level: '●' },
				{ label: 'Sales Pipeline Management', level: '◆' }
			]
		}
	];

	const languages = [
		{ label: 'Portuguese', value: 'native' },
		{ label: 'English', value: 'professional' }
	];

	const contactActions = [
		{ label: 'Email', value: 'fpvilela.dev@gmail.com', href: 'mailto:fpvilela.dev@gmail.com' },
		{ label: 'LinkedIn', value: 'linkedin.com/in/fpvilela', href: 'https://www.linkedin.com/in/fpvilela/' },
		{ label: 'GitHub', value: 'github.com/fpvilela', href: 'https://github.com/fpvilela' }
	];

	let mobileNavOpen = $state(false);
</script>

<svelte:head>
	<title>Filipe Vilela | Full-stack Developer</title>
	<meta
		name="description"
		content="Homepage for Filipe Vilela, a full-stack developer focused on web systems, workflow automation, and API integrations."
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Fraunces:wght@600&family=IBM+Plex+Mono:wght@400;500&family=Manrope:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="page-shell">
	<header class="site-header">
		<div class="container nav-shell">
			<a class="brand" href="/">
				<span class="brand__name">Filipe Vilela</span>
				<span class="brand__meta">Full-stack Developer</span>
			</a>

			<div class="nav-actions">
				<nav class:nav--open={mobileNavOpen} class="nav-links" aria-label="Primary">
					{#each navItems as item}
						<a href={item.href} onclick={() => (mobileNavOpen = false)}>{item.label}</a>
					{/each}
					<a class="nav-links__resume" href="#education" onclick={() => (mobileNavOpen = false)}>
						Resume
					</a>
				</nav>

				<button
					class="menu-toggle"
					type="button"
					aria-expanded={mobileNavOpen}
					aria-label="Toggle navigation"
					onclick={() => (mobileNavOpen = !mobileNavOpen)}
				>
					Menu
				</button>

				<a class="button button--quiet header-cta" href="#contact">Contact</a>
			</div>
		</div>
	</header>

	<main>
		<section class="hero section">
			<div class="container hero-grid">
				<div class="hero-copy">
					<p class="eyebrow">Hello, I&apos;m <a href="#about">@fpvilela</a>.</p>
					<h1>Full-stack Developer.</h1>
					<p class="lead">
						I build practical digital solutions across web applications, workflow automation,
						and API integrations.
					</p>
					<div class="hero-cta">
						<a class="button" href="#projects">View projects</a>
						<a class="button button--secondary" href="#education">Resume</a>
					</div>
					<ul class="proof-row" aria-label="Focus areas">
						{#each proofItems as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>

				<aside class="hero-aside">
					<p class="meta-label">Current focus</p>
					<ul class="meta-list">
						<li>Web systems with structured admin and operations flows.</li>
						<li>Automation pipelines for legal, sales, and internal work.</li>
						<li>Integrations that connect AI, APIs, and business tooling.</li>
					</ul>
				</aside>
			</div>
		</section>

		<section class="section section--compact" id="about">
			<div class="container">
				<div class="section-intro narrow">
					<p class="section-kicker">About Me</p>
					<h2>Practical implementation over presentation-first portfolios.</h2>
					<p>
						I am a full-stack developer passionate about technology and focused on creating
						practical digital solutions that solve real operational problems. My work
						encompasses web systems, workflow automation, and API integrations.
					</p>
					<p>
						I like turning requirements into structured implementations, from interface and
						back-end logic to deployment, documentation, and process automation.
					</p>
				</div>

				<div class="about-row">
					<div class="chip-row">
						<span class="chip">Web systems and internal tools</span>
						<span class="chip">Workflow automation and integrations</span>
					</div>
					<p class="ask-line">
						<span>Ask me.</span> Product requirements, integration-heavy workflows, internal tools,
						or production-ready implementation details.
					</p>
				</div>
			</div>
		</section>

		<section class="section" id="experience">
			<div class="container">
				<div class="section-intro">
					<p class="section-kicker">Experience</p>
					<h2>Role-first work across delivery, automation, and operational systems.</h2>
				</div>

				<div class="experience-list">
					{#each experience as item}
						<article class="experience-item">
							<div class="experience-item__header">
								<h3>{item.title}</h3>
								<p class="experience-meta">
									<a href={item.companyHref} target="_blank" rel="noreferrer">{item.company}</a>
									<span>{item.period}</span>
								</p>
							</div>
							<p>{item.description}</p>
							<div class="inline-block">
								<p class="meta-label">Related roles</p>
								<div class="chip-row">
									{#each item.roles as role}
										<span class="chip chip--soft">{role}</span>
									{/each}
								</div>
							</div>
							<div class="inline-block">
								<p class="meta-label">Related projects</p>
								<div class="link-row">
									{#each item.projects as project}
										<a href={project.href}>{project.label}</a>
									{/each}
								</div>
							</div>
						</article>
					{/each}
				</div>
			</div>
		</section>

		<section class="section" id="projects">
			<div class="container">
				<div class="section-intro">
					<p class="section-kicker">Projects</p>
					<h2>Featured work selected for breadth, recency, and strategic value.</h2>
				</div>

				<div class="project-grid">
					{#each featuredProjects as project}
						<article class="project-card" id={project.id}>
							<div class="project-card__top">
								<h3>{project.title}</h3>
								<p class="project-year">{project.year}</p>
							</div>
							<p>{project.summary}</p>
							<ul class="bullet-list">
								{#each project.bullets as bullet}
									<li>{bullet}</li>
								{/each}
							</ul>
							{#if project.links?.length}
								<div class="link-row">
									{#each project.links as link}
										<a href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
									{/each}
								</div>
							{/if}
							<div class="chip-row">
								{#each project.skills as skill}
									<span class="chip">{skill}</span>
								{/each}
							</div>
						</article>
					{/each}
				</div>
			</div>
		</section>

		<section class="section section--compact" id="education">
			<div class="container">
				<div class="section-intro">
					<p class="section-kicker">Education</p>
					<h2>Formal education backed by targeted technical study.</h2>
				</div>

				<div class="education-grid">
					<div>
						<h3 class="subheading">Education</h3>
						<div class="stack-list">
							{#each education as item}
								<article class="light-entry">
									<p class="meta-label">{item.year}</p>
									<h4>
										<a href={item.institutionHref} target="_blank" rel="noreferrer">
											{item.institution}
										</a>
									</h4>
									<p>{item.degree}</p>
									<p>{item.note}</p>
									<p class="entry-location">{item.location}</p>
								</article>
							{/each}
						</div>
					</div>

					<div>
						<h3 class="subheading">Courses and Certificates</h3>
						<div class="stack-list">
							{#each courses as course}
								<article class="light-entry">
									<p class="meta-label">{course.provider}</p>
									<h4>{course.title}</h4>
									<p>{course.note}</p>
									<div class="link-row">
										{#each course.links as link}
											<a href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
										{/each}
									</div>
								</article>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="section" id="skills">
			<div class="container">
				<div class="section-intro">
					<p class="section-kicker">Skills and Languages</p>
					<h2>Grouped for scanning, with lightweight competency markers.</h2>
				</div>

				<div class="skills-panel">
					<div class="legend" aria-label="Competency legend">
						{#each skillLegend as item}
							<span><strong>{item.marker}</strong> {item.label}</span>
						{/each}
					</div>

					<div class="skills-groups">
						{#each skillGroups as group}
							<section class="skills-group">
								<h3>{group.title}</h3>
								<div class="chip-row">
									{#each group.items as item}
										<span class="chip chip--skill">
											<span class="chip__level">{item.level}</span>
											{item.label}
										</span>
									{/each}
								</div>
							</section>
						{/each}
					</div>

					<section class="skills-group skills-group--languages">
						<h3>Languages</h3>
						<div class="language-list">
							{#each languages as item}
								<p><span>{item.label}</span><span>{item.value}</span></p>
							{/each}
						</div>
					</section>
				</div>
			</div>
		</section>

		<section class="section" id="contact">
			<div class="container">
				<div class="contact-block">
					<div class="narrow">
						<p class="section-kicker">Contact</p>
						<h2>Open to practical collaboration, product work, and technical problem solving.</h2>
						<p>
							If the work needs structured implementation, cleaner operations, or better system
							connections, contact is straightforward.
						</p>
					</div>

					<div class="contact-actions">
						{#each contactActions as item}
							<a class="contact-link" href={item.href} target="_blank" rel="noreferrer">
								<span class="contact-link__label">{item.label}</span>
								<span class="contact-link__value">{item.value}</span>
							</a>
						{/each}
					</div>
				</div>
			</div>
		</section>
	</main>
</div>

<style>
	.page-shell {
		min-height: 100vh;
	}

	.container {
		width: min(100% - 2rem, var(--container-max));
		margin: 0 auto;
	}

	.narrow {
		max-width: var(--container-narrow);
	}

	.section {
		padding: var(--space-7) 0;
		border-top: 1px solid var(--color-border);
	}

	.section--compact {
		padding: var(--space-6) 0;
	}

	.site-header {
		position: sticky;
		top: 0;
		z-index: 20;
		backdrop-filter: blur(14px);
		background: rgba(245, 241, 232, 0.84);
		border-bottom: 1px solid rgba(216, 208, 196, 0.7);
	}

	.nav-shell {
		min-height: 4.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-4);
		padding: var(--space-3) 0;
	}

	.brand {
		display: inline-flex;
		flex-direction: column;
		text-decoration: none;
	}

	.brand__name {
		font-weight: 700;
		letter-spacing: -0.02em;
	}

	.brand__meta,
	.meta-label,
	.section-kicker,
	.project-year,
	.experience-meta,
	.entry-location,
	.legend,
	.contact-link__label {
		font-family:
			'IBM Plex Mono', 'SFMono-Regular', 'Consolas', monospace;
		font-size: 0.875rem;
		line-height: 1.4;
		color: var(--color-text-muted);
	}

	.brand__meta {
		margin-top: 0.1rem;
	}

	.nav-actions {
		display: flex;
		align-items: center;
		gap: var(--space-3);
	}

	.nav-links {
		display: none;
		align-items: center;
		gap: var(--space-4);
	}

	.nav-links a {
		text-decoration: none;
		color: var(--color-text-muted);
		transition:
			color var(--motion-fast) var(--ease-standard),
			transform var(--motion-fast) var(--ease-standard);
	}

	.nav-links a:hover,
	.nav-links a:focus-visible {
		color: var(--color-accent);
		transform: translateY(-1px);
	}

	.nav-links__resume {
		display: none;
	}

	.menu-toggle,
	.button,
	.contact-link {
		border-radius: var(--radius-lg);
		transition:
			transform var(--motion-fast) var(--ease-standard),
			border-color var(--motion-fast) var(--ease-standard),
			background-color var(--motion-fast) var(--ease-standard),
			color var(--motion-fast) var(--ease-standard);
	}

	.menu-toggle {
		border: 1px solid var(--color-border);
		background: var(--color-surface);
		padding: 0.65rem 1rem;
	}

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.9rem 1.25rem;
		border: 1px solid transparent;
		background: var(--color-accent);
		color: var(--color-accent-contrast);
		text-decoration: none;
		font-weight: 600;
		box-shadow: var(--shadow-soft);
	}

	.button:hover,
	.button:focus-visible,
	.menu-toggle:hover,
	.menu-toggle:focus-visible,
	.contact-link:hover,
	.contact-link:focus-visible {
		transform: translateY(-2px);
	}

	.button--secondary,
	.button--quiet {
		background: transparent;
		border-color: var(--color-border);
		color: var(--color-text);
		box-shadow: none;
	}

	.button--secondary:hover,
	.button--secondary:focus-visible,
	.button--quiet:hover,
	.button--quiet:focus-visible,
	.menu-toggle:hover,
	.menu-toggle:focus-visible {
		border-color: var(--color-accent);
		color: var(--color-accent);
	}

	.hero {
		border-top: 0;
		padding-top: clamp(5.5rem, 16vh, 9rem);
	}

	.hero-grid {
		display: grid;
		gap: var(--space-6);
		align-items: start;
	}

	.eyebrow,
	.hero p,
	.section-intro p,
	.experience-item p,
	.project-card p,
	.light-entry p,
	.contact-block p {
		margin: 0;
	}

	.eyebrow {
		font-size: clamp(1rem, 1.8vw, 1.2rem);
		color: var(--color-text-muted);
		margin-bottom: var(--space-3);
	}

	.eyebrow a,
	.link-row a,
	.experience-meta a,
	.light-entry a {
		color: var(--color-accent);
		text-decoration-thickness: 1px;
		text-underline-offset: 0.18em;
	}

	h1,
	h2,
	h3,
	h4 {
		margin: 0;
		font-weight: 600;
		letter-spacing: -0.03em;
	}

	h1,
	h2 {
		font-family:
			'Fraunces', 'Iowan Old Style', 'Times New Roman', serif;
	}

	h1 {
		max-width: 9ch;
		font-size: clamp(3.4rem, 8vw, 6.8rem);
		line-height: 0.98;
	}

	h2 {
		font-size: clamp(1.6rem, 2.4vw, 2.4rem);
		line-height: 1.1;
		margin-bottom: var(--space-4);
	}

	h3 {
		font-size: 1.35rem;
		line-height: 1.2;
	}

	h4 {
		font-size: 1.05rem;
		line-height: 1.35;
	}

	.lead {
		max-width: 32rem;
		margin-top: var(--space-4);
		font-size: 1.125rem;
	}

	.hero-cta {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		margin-top: var(--space-5);
	}

	.proof-row,
	.meta-list,
	.bullet-list {
		margin: 0;
		padding: 0;
	}

	.proof-row {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
		list-style: none;
		margin-top: var(--space-5);
	}

	.proof-row li,
	.chip {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 0.85rem;
		border-radius: var(--radius-lg);
		background: var(--color-chip);
	}

	.hero-aside {
		padding: var(--space-5);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		background: linear-gradient(180deg, rgba(251, 248, 242, 0.96), rgba(236, 229, 216, 0.9));
		box-shadow: var(--shadow-soft);
	}

	.meta-list {
		list-style: none;
		display: grid;
		gap: var(--space-3);
		margin-top: var(--space-3);
	}

	.meta-list li {
		padding-top: var(--space-3);
		border-top: 1px solid rgba(216, 208, 196, 0.9);
	}

	.section-intro {
		margin-bottom: var(--space-5);
	}

	.section-kicker {
		margin-bottom: var(--space-2);
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	.about-row,
	.contact-block {
		display: grid;
		gap: var(--space-4);
	}

	.chip-row {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
	}

	.chip--soft {
		background: transparent;
		border: 1px solid var(--color-border);
	}

	.ask-line {
		padding: var(--space-4) 0 0;
		border-top: 1px solid var(--color-border);
		max-width: 42rem;
	}

	.ask-line span {
		font-weight: 600;
	}

	.experience-list,
	.stack-list {
		display: grid;
	}

	.experience-item,
	.light-entry {
		padding: var(--space-5) 0;
		border-top: 1px solid var(--color-border);
	}

	.experience-item:first-child,
	.light-entry:first-child {
		padding-top: 0;
		border-top: 0;
	}

	.experience-item__header {
		display: grid;
		gap: var(--space-2);
		margin-bottom: var(--space-3);
	}

	.experience-meta {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
	}

	.inline-block {
		display: grid;
		gap: var(--space-2);
		margin-top: var(--space-4);
	}

	.link-row {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
	}

	.project-grid {
		display: grid;
		gap: var(--space-4);
	}

	.project-card {
		display: grid;
		gap: var(--space-4);
		padding: var(--space-5);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		background: rgba(251, 248, 242, 0.82);
	}

	.project-card__top {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: var(--space-3);
	}

	.bullet-list {
		padding-left: 1.15rem;
		display: grid;
		gap: var(--space-2);
	}

	.education-grid,
	.skills-groups {
		display: grid;
		gap: var(--space-5);
	}

	.subheading {
		margin-bottom: var(--space-4);
	}

	.skills-panel {
		display: grid;
		gap: var(--space-5);
	}

	.legend {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		padding-bottom: var(--space-3);
		border-bottom: 1px solid var(--color-border);
	}

	.skills-group {
		display: grid;
		gap: var(--space-3);
	}

	.chip--skill {
		background: transparent;
		border: 1px solid var(--color-border);
	}

	.chip__level {
		font-family:
			'IBM Plex Mono', 'SFMono-Regular', 'Consolas', monospace;
		color: var(--color-accent);
	}

	.language-list {
		display: grid;
		gap: var(--space-2);
	}

	.language-list p {
		display: flex;
		justify-content: space-between;
		gap: var(--space-4);
		padding: var(--space-3) 0;
		border-top: 1px solid var(--color-border);
	}

	.contact-block {
		padding: var(--space-5);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		background: rgba(251, 248, 242, 0.94);
	}

	.contact-actions {
		display: grid;
		gap: var(--space-3);
	}

	.contact-link {
		display: grid;
		gap: 0.2rem;
		padding: var(--space-4);
		border: 1px solid var(--color-border);
		background: var(--color-surface);
		text-decoration: none;
	}

	.contact-link__value {
		font-size: 1rem;
		font-weight: 600;
	}

	@media (min-width: 48rem) {
		.container {
			width: min(100% - 3rem, var(--container-max));
		}

		.nav-links {
			display: flex;
		}

		.nav-links__resume {
			display: inline;
		}

		.menu-toggle {
			display: none;
		}

		.hero-grid,
		.about-row,
		.contact-block,
		.education-grid {
			grid-template-columns: minmax(0, 1.3fr) minmax(18rem, 0.9fr);
		}

		.project-grid,
		.skills-groups {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 47.99rem) {
		.header-cta {
			display: none;
		}

		.nav-links.nav--open {
			position: absolute;
			left: 1rem;
			right: 1rem;
			top: calc(100% + 0.5rem);
			display: grid;
			padding: var(--space-4);
			border: 1px solid var(--color-border);
			border-radius: var(--radius-md);
			background: rgba(251, 248, 242, 0.98);
			box-shadow: var(--shadow-soft);
		}

		.nav-links.nav--open a {
			padding: 0.35rem 0;
		}
	}

	@media (min-width: 72rem) {
		.container {
			width: min(100% - 4rem, var(--container-max));
		}

		.hero-grid {
			grid-template-columns: minmax(0, 1.5fr) minmax(18rem, 0.8fr);
			min-height: calc(100vh - 8rem);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		:global(:root) {
			scroll-behavior: auto;
		}

		* {
			transition: none !important;
		}
	}
</style>
