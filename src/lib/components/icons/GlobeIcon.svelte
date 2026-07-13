<script lang="ts">
	let { size = 16, strokeWidth = 2 }: { size?: number | string; strokeWidth?: number } = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-linecap="round"
	stroke-linejoin="round"
	stroke-width={strokeWidth}
	role="presentation"
>
	<circle cx="12" cy="12" r="10" />
	<path d="M2 12h20" />
	<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
</svg>
