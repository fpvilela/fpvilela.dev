<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<style>
	:global(:root) {
		--color-bg: #f5f1e8;
		--color-surface: #fbf8f2;
		--color-text: #171717;
		--color-text-muted: #5f5a52;
		--color-accent: #1f6a5e;
		--color-accent-contrast: #f6fbf8;
		--color-border: #d8d0c4;
		--color-chip: #ece5d8;
		--color-focus: #0f4c81;
		--space-1: 0.25rem;
		--space-2: 0.5rem;
		--space-3: 0.875rem;
		--space-4: 1.25rem;
		--space-5: 2rem;
		--space-6: 3.5rem;
		--space-7: 5rem;
		--space-8: 7rem;
		--container-max: 72rem;
		--container-narrow: 46rem;
		--radius-sm: 0.4rem;
		--radius-md: 0.8rem;
		--radius-lg: 1.4rem;
		--shadow-soft: 0 10px 30px rgba(23, 23, 23, 0.06);
		--motion-fast: 140ms;
		--motion-base: 220ms;
		--motion-slow: 360ms;
		--ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
		font-family:
			'Manrope', 'Inter', 'Segoe UI', sans-serif;
		color: var(--color-text);
		background: var(--color-bg);
		scroll-behavior: smooth;
	}

	:global(html) {
		background: var(--color-bg);
	}

	:global(body) {
		margin: 0;
		min-width: 320px;
		background:
			radial-gradient(circle at top, rgba(251, 248, 242, 0.92), rgba(245, 241, 232, 0.96) 38%, var(--color-bg) 72%);
		color: var(--color-text);
		font-family:
			'Manrope', 'Inter', 'Segoe UI', sans-serif;
		line-height: 1.6;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(img) {
		display: block;
		max-width: 100%;
	}

	:global(a) {
		color: inherit;
	}

	:global(button),
	:global(input),
	:global(textarea),
	:global(select) {
		font: inherit;
	}

	:global(:focus-visible) {
		outline: 2px solid var(--color-focus);
		outline-offset: 3px;
	}

	:global(::selection) {
		background: rgba(31, 106, 94, 0.18);
	}
</style>

{@render children()}
