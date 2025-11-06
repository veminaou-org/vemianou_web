<template>
    <section class="px-8 md:px-12 lg:px-20 bg-gray-background py-12">
        <div class="flex flex-col lg:flex-row gap-12 lg:w-4/5 mx-auto">
            <!-- Images container -->
            <div class="relative lg:w-1/2 h-[400px] md:h-[500px] lg:h-[600px] flex-shrink-0">
                <!-- Main image (top-left, largest) -->
                <div class="absolute top-0 left-0 w-[60%] md:w-auto h-[65%] md:h-[70%] z-10">
                    <img 
                        src="/images/gallery/image1.png" 
                        alt="Association Vémianou" 
                        class="w-full md:w-64 lg:w-80 h-full object-cover rounded-xl md:rounded-2xl shadow-xl"
                    >
                </div>

                <!-- Middle image -->
                <div class="absolute top-[30%] md:top-[35%] right-[5%] md:right-[20%] w-[50%] md:w-[55%] h-[45%] md:h-[50%] z-20">
                    <img 
                        src="/images/gallery/image2.png" 
                        alt="Actions de l'association" 
                        class="w-full md:w-52 lg:w-60 h-full object-cover rounded-xl md:rounded-2xl shadow-xl"
                    >
                </div>

                <!-- Smallest image -->
                <div class="absolute bottom-0 right-0 md:right-[15%] w-[40%] h-[35%] md:h-[40%] z-30">
                    <img 
                        src="/images/gallery/image3.png" 
                        alt="Réunions et événements" 
                        class="w-full md:w-40 lg:w-44 h-full object-cover rounded-xl md:rounded-2xl shadow-xl"
                    >
                </div>
            </div>
            
            <!-- Text container -->
            <div class="flex flex-col gap-12">
                <div class="flex flex-col gap-4">
                    <h2 class="text-primary text-2xl font-bold">Notre Association</h2>
                    <p class="text-3xl font-bold md:text-5xl">Association <br> Vémianou</p>
                    <div class="flex gap-1">
                        <div class="w-2 h-1 bg-primary"/>
                        <div class="w-12 h-1 bg-primary"/>
                    </div>
                </div>

                <div class="flex flex-col gap-8 text-gray-text text-base">
                    <p>L’Association Vémianou est une organisation togolaise engagée pour la paix, 
                        l'unité et le vivre-ensemble. Elle renforce les liens de solidarité entre les Togolais 
                        et sensibilise aux valeurs de paix, d’unité et de fraternité afin de construire une société apaisée, 
                        loin de la haine, de l'intolérance et de la violence
                    </p>
                    <p>
                       Nos objectifs sont de développer la solidarité, renforcer les liens entre les citoyens et promouvoir le bonheur partagé.
                       A cet effet, nous organisons des événements culturels, sportifs et éducatifs afin de sensibiliser les Togolais à la paix, 
                       à l'unité et au vivre-ensemble. Nous faisons également des dons aux personnes en difficulté afin de les aider à mieux vivre.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>