<template>
	<div class="layout-topbar">
		<button class="p-link layout-menu-button" @click="onMenuToggle">
			<span class="pi pi-bars"></span>
		</button>
		<div class="layout-topbar-icons">
			<span class="layout-topbar-search">
				<InputText type="text" placeholder="Search" />
				<span class="layout-topbar-search-icon pi pi-search"></span>
			</span>
			<button class="p-link">
				<span class="layout-topbar-item-text">Events</span>
				<span class="layout-topbar-icon pi pi-calendar"></span>
				<span class="layout-topbar-badge">5</span>
			</button>
			<button class="p-link">
				<span class="layout-topbar-item-text">Settings</span>
				<span class="layout-topbar-icon pi pi-cog"></span>
			</button>
			<button class="p-link" @click="toggleMenuProfile" >
				<span class="layout-topbar-item-text">User</span>
				<span class="layout-topbar-icon pi pi-user"></span>
			</button>
			
		</div>
	</div>
	<Menu id="overlay_menu" ref="menu" :model="items" :popup="true" />	
</template>

<script>
import ProductService from './service/ProductService';
//import UserContext from './service/use'

export default {
	data(){
		return{
			items:[
				{
					label: 'Logout',
					icon: 'pi  pi-power-off',
					command: () => {
						this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
					}
				}
			]
		}
	},
    methods: {
        onMenuToggle(event) {
            this.$emit('menu-toggle', event);
		},		
		toggleMenuProfile(event) {
			
			this.$refs.menu.toggle(event);
			var p=new ProductService();
			p.getProductsSmall();
		}
    }
}
</script>