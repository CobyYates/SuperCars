<template>
      <v-content>
    <v-row>
        <v-col class="pt-0 pb-12">
            <v-parallax
            height="500"
            src="https://d1i1eo6qmdfmdv.cloudfront.net/upload/site/pages/newslider_otherpages/DSC01639.jpg"
            justify="center" align="center"
            ><h1 class="text-center">The Garage</h1>
            <h2 class="text-center">where you build your dream garage</h2></v-parallax>
        </v-col>
    </v-row>

    <v-row class="text-center pb-12">
        <v-col align="center">
            <h3>Step 1</h3>
            <p>Select garage size</p>
            <p><i class="fas fa-warehouse"></i></p>        
        </v-col>
        <v-col align="center">
            <h3>Step 2</h3>
            <p>Select super cars</p>
            <p><i class="fas fa-car"></i></p>
        </v-col>
        <v-col align="center">
            <h3>Step 3</h3>
            <p>Hire helper</p>
            <p><i class="fas fa-user"></i></p>
        </v-col>
    </v-row>

    <v-row>
        <v-col class="pb-0">
            <v-parallax
            height="400"
            src="http://ddaudio.com/wp-content/uploads/2016/01/carbonfiber-header-black-1.jpg">
            <v-row align="center">
                <v-col align="center">
                    <h2 class="mb-10">HAVE A DREAM GARAGE?</h2>
                    <v-btn to="/build" exact large color="teal accent-4">START BUILDING</v-btn>
                </v-col>
            </v-row>
            </v-parallax>
        </v-col>
    </v-row>
        
    </v-content>
</template>

<script>

export default {
};
</script>

<style scoped>
i {
    font-size: 100px;
    color: rgb(66, 135, 214);
}
</style>