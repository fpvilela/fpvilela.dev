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
	<path d="M14 3h7v7" />
	<path d="M10 14 21 3" />
	<path d="M21 14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6" />
</svg>
