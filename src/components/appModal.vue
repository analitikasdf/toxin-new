<template>
	<div class="Modal">
		<div class="Message">
			<slot name="login"></slot>
			<slot name="checkin"></slot>
		</div>
		<button
			@click.stop="closeModal"
			class="CloseModal">x</button>
	</div>
</template>

<script>
export default {
	data() {
		return {

		}
	},
	methods: {
		closeModal() {
			this.$emit('onCloseModal')
		}
	}
}
</script>

<style lang="scss" scoped>
	.Modal {
		padding: 10px;
		position: fixed;
		bottom:20px;
		left:50%;
		transform:translate(-50%, 0%);
		border-radius: 4px;
		box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
		background-color: #fff;
	}
	.Message {
		display: inline-block;
		padding: 0 20px 0 0;
	}
</style>