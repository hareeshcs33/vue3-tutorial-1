<template>
  <div>
    <h3>Admin</h3>
    <router-link :to="{ name: 'AdminView' }">Admin</router-link> |
    <router-link :to="{ name: 'ProductsView' }">Product View</router-link> |
    <router-link :to="{ name: 'ProductCreate' }">Product Create</router-link>

    <router-view />
  </div>
</template>
