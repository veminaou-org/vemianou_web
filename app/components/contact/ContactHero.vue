<template>
  <section class="relative bg-primary py-20 px-8 overflow-hidden">
    <!-- Decorative half-circle top-left -->
    <div class="absolute -left-32 -top-32 w-80 h-80 opacity-80">
      <svg viewBox="0 0 100 100" class="w-full h-full">
        <circle cx="0" cy="0" r="80" fill="none" stroke="white" stroke-width="2" />
      </svg>
    </div>
    
    <!-- Decorative half-circle bottom-right -->
    <div class="absolute -right-32 -bottom-32 w-80 h-80">
      <svg viewBox="0 0 100 100" class="w-full h-full">
        <circle cx="100" cy="100" r="80" fill="none" stroke="white" stroke-width="2" />
      </svg>
    </div>
    
    <!-- Title -->
    <div class="relative z-10 max-w-7xl mx-auto text-right">
      <h1 class="text-4xl md:text-5xl font-bold text-white">
        Contactez-nous
      </h1>
    </div>
  </section>
</template>

