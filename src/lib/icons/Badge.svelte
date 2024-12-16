<script lang="ts">
	const { logo, color, text = logo } = $props();
</script>

<img
	src="https://img.shields.io/badge/{encodeURIComponent(text)}-{color}?style=for-the-badge&logo={logo}"
	alt=""
/>
