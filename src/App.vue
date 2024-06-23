<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <section>
    <nav>
      <ul>
        <li>
          <RouterLink to="/some-page">{{ $t("Some page") }}</RouterLink>
        </li>
        <li>
          <RouterLink to="/other-page">{{ $t("Other page") }}</RouterLink>
        </li>
      </ul>
    </nav>
  </section>

  <section>
    <RouterView />
  </section>
</template>
