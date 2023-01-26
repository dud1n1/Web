new Vue({
  el: "#ax",
  data: {
      posts: []
  },
  created() { 
      axios.get('https://isidea.ru/rgups_data.json').then(axios => {
          this.posts = axios.data;
      })
  }
});