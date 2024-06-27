<template>
    <div>
        <Navbar />
        <DatatableAdmin/>
        <Footer />
    </div>
</template>

<script>
import Navbar from "../components/gerais/Navbar.vue";
import Footer from "../components/gerais/Footer.vue";
import DatatableAdmin from "../components/admin/DatatableAdmin.vue";

export default {
    name: 'viewAdmin',
    components:{Navbar,Footer, DatatableAdmin}
}
</script>

<style>

</style>