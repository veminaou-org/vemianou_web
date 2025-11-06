<template>
  <div class="space-y-8">
    <!-- Title and Description -->
    <div>
      <h2 class="text-xl md:text-2xl font-bold text-gray-text mb-4">
        Discutez avec nous
      </h2>
      <p class="text-gray-text leading-relaxed">
        Des questions, des commentaires ou des suggestions ? Remplissez simplement le formulaire 
        et nous vous contacterons sous peu.
      </p>
    </div>

    <!-- Contact Details -->
    <div class="space-y-4">
      <!-- Address -->
      <div class="flex items-start gap-3">
        <Icon name="mdi:map-marker" class="w-6 h-6 text-primary flex-shrink-0 mt-1" />
        <p class="text-gray-text">
          Lomé, Togo<br>
          2090 avenue Maman N'Danida Amoutive
        </p>
      </div>

      <!-- Phone -->
      <div class="flex items-center gap-3">
        <Icon name="mdi:phone" class="w-6 h-6 text-primary flex-shrink-0" />
        <a href="tel:+22892502650" class="text-gray-text hover:text-primary transition-colors">
          +228 92 50 26 50
        </a>
      </div>

      <!-- Email -->
      <div class="flex items-center gap-3">
        <Icon name="mdi:email" class="w-6 h-6 text-primary flex-shrink-0" />
        <a href="mailto:contact@vemianou.org" class="text-gray-text hover:text-primary transition-colors">
          contact@vemianou.org
        </a>
      </div>
    </div>

    <!-- Map -->
    <div class="w-full h-64 bg-gray-200 rounded-xl overflow-hidden">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8712.057978882924!2d1.2203232321120252!3d6.143621074235652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e1ed0dce8a99%3A0xa5b3436d7980d208!2zTjEsIExvbcOp!5e0!3m2!1sfr!2stg!4v1762441767683!5m2!1sfr!2stg" 
            width="600" 
            height="450" 
            style="border:0;" 
            allowfullscreen="true" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
</template>

