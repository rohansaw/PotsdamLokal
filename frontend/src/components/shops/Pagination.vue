<template>
  <div id="pagination">
    <ul
      v-if="pager.pages && pager.pages.length"
      class="pagination justify-content-center mb-5">
      <li
        :class="{'disabled':pager.currentPage === 1}"
        class="page-item first-item">
        <router-link
          :to="{ query: { page: 1 }}"
          class="page-link">First</router-link>
      </li>
      <li
        :class="{'disabled':pager.currentPage === 1}"
        class="page-item previous-item">
        <router-link
          :to="{ query: { page: pager.currentPage - 1 }}"
          class="page-link">Previous</router-link>
      </li>
      <li
        v-for="page in pager.pages"
        :key="page"
        :class="{'active':pager.currentPage === page}"
        class="page-item number-item">
        <router-link
          :to="{ query: { page: page }}"
          class="page-link">{{ page }}</router-link>
      </li>
      <li
        :class="{'disabled':pager.currentPage === pager.totalPages}"
        class="page-item next-item">
        <router-link
          :to="{ query: { page: pager.currentPage + 1 }}"
          class="page-link">Next</router-link>
      </li>
      <li
        :class="{'disabled':pager.currentPage === pager.totalPages}"
        class="page-item last-item">
        <router-link
          :to="{ query: { page: pager.totalPages }}"
          class="page-link">Last</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['pager']
}
</script>
