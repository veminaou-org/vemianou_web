<template>
  <section class="bg-[#282828] py-16 px-8 md:px-12 lg:px-20">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <!-- Left Column - Présidente -->
        <div class="flex flex-col gap-6 justify-between h-full">
          <div class="w-full max-w-md flex-grow overflow-hidden rounded-2xl shadow-2xl mx-auto">
            <img 
              src="/images/gallery/presidente.png" 
              alt="Irène de SOUZA" 
              class="w-full h-full object-cover"
            >
          </div>
          
          <div class="flex flex-col gap-2 text-center flex-shrink-0">
            <p class="text-2xl font-bold text-white">
              Irène de SOUZA
            </p>
            
            <p class="text-primary font-semibold text-lg">
              Présidente de l'Association VEMIANOU
            </p>
            
            <p class="text-white text-base">
              Honorable Députée à l'Assemblée Nationale du Togo
            </p>
          </div>
        </div>

        <!-- Right Column - Mission & Vision -->
        <div class="flex flex-col gap-8 h-full">
          <!-- Mission Card -->
            <div class="flex flex-col gap-4 md:flex-row">
                <div class="w-96 h-56 rounded-5xl">
                    <img 
                        src="/images/gallery/image1.png" 
                        alt="Mission" 
                        class="w-full h-full object-cover rounded-xl "
                    >
                </div>
                <div class="flex flex-col gap-2 justify-center">
                    <h5 class="text-xl font-semibold text-primary mb-4">
                        Notre Mission
                    </h5>
                    
                    <p class="text-white text-base leading-relaxed md:w-64">
                        Développer la solidarité, renforcer les liens entre les citoyens et promouvoir le bonheur partagé.
                    </p>
                </div>

            </div>

            <!-- Vision Card -->
            <div class="flex flex-col gap-4 md:flex-row">
                <div class="w-96 h-56 rounded-5xl">
                    <img 
                        src="/images/gallery/image2.png" 
                        alt="Vision" 
                        class="w-full h-full object-cover rounded-xl "
                    >
                </div>
                <div class="flex flex-col gap-2 justify-center">
                    <h5 class="text-xl font-semibold text-primary mb-4">
                        Notre Vision
                    </h5>
                    
                    <p class="text-white text-base leading-relaxed md:w-64">
                        Contribuer à un Togo pacifique et stable où les familles vivent en harmonie, 
                        dans un environnement propice à l'épanouissement collectif.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

