<template>
  <div class="topNavbarDiv">
    <span class="question">Already a member?</span>
    <router-link to="/login" class="routerLink" active-class="activeLink"
      >Login</router-link
    >
    <span>OR</span>
    <router-link to="/register" class="routerLink" active-class="activeLink"
      >Register</router-link
    >
  </div>
</template>

<script>
export default {
  name: "TopNavbar",
};
</script>

<style scoped>
.topNavbarDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  background: black;
  color: white;
  height: 40px;
}

.routerLink {
  text-decoration: none;
  color: white;
  font-weight: 500;
}
.routerLink:hover {
  border-bottom: 2px solid white;
}

span {
  font-weight: 300;
}

.activeLink {
  border-bottom: 2px solid white;
}
</style>
