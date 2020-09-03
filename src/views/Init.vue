<template>
</template>
<script>
    export default {
        name: 'Init',
        methods: {
            isMobile() {
                if( screen.width <= 768 ) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        created() {
            if (this.isMobile()) {
                this.$router.push('/HomeMobile');
            }
            else {
                this.$router.push('/Home');
            }
        }
    }
</script>
<style scoped>
</style>